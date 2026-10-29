import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdsisibxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdsisibxw"/>`,
		"fallback": "withicons:clover-solid",
	});
}

export default Component;
