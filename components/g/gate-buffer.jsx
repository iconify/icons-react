import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y34y86l8t.css';
import '../../css/w/wrvij_8zr.css';
import '../../css/v/vs_tmxb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y34y86l8t"/><path class="wrvij_8zr"/><path class="vs_tmxb_k"/></g>`,
		"fallback": "iconaut:gate-buffer",
	});
}

export default Component;
