import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_a77p50x.css';
import '../../css/m/mlhujcbev.css';
import '../../css/n/n7f7_pbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e_a77p50x"/><path class="mlhujcbev"/><path clip-rule="evenodd" class="n7f7_pbpe"/></g>`,
		"fallback": "reicon:building-coins",
	});
}

export default Component;
