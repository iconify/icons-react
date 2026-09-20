import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrrw9kgyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrrw9kgyl"/>`,
		"fallback": "lets-icons:basket-alt",
	});
}

export default Component;
