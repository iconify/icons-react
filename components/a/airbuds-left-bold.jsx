import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mv51s6-vx.css';
import '../../css/d/dnvesykes.css';
import '../../css/t/tsz79coki.css';
import '../../css/k/kfrk--cxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mv51s6-vx"/><path class="dnvesykes"/><path clip-rule="evenodd" class="tsz79coki"/><path clip-rule="evenodd" class="kfrk--cxh"/></g>`,
		"fallback": "solar:airbuds-left-bold",
	});
}

export default Component;
