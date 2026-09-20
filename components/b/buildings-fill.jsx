import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw3rkdb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw3rkdb5x"/>`,
		"fallback": "keyline-icons:buildings-fill",
	});
}

export default Component;
