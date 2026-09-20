import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cpkpcr77p.css';
import '../../css/v/vko31-lxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cpkpcr77p"/><path class="vko31-lxd"/></g>`,
		"fallback": "reicon:courthouse-filled",
	});
}

export default Component;
