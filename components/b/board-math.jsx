import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u-8x99uis.css';
import '../../css/h/h10cebcqu.css';
import '../../css/n/nptw7vb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u-8x99uis"/><path class="h10cebcqu"/><path class="nptw7vb_f"/></g>`,
		"fallback": "hugeicons:board-math",
	});
}

export default Component;
