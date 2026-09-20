import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/udc1_9b_a.css';
import '../../css/y/yp5w5ckiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="udc1_9b_a"/><path clip-rule="evenodd" class="yp5w5ckiy"/></g>`,
		"fallback": "solar:cup-first-outline",
	});
}

export default Component;
