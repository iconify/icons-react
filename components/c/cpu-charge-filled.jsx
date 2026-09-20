import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pllqdf3eb.css';
import '../../css/c/cpkpcr77p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pllqdf3eb"/><path class="cpkpcr77p"/></g>`,
		"fallback": "reicon:cpu-charge-filled",
	});
}

export default Component;
