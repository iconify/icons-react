import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jemwryzre.css';
import '../../css/f/f_laxpb8u.css';
import '../../css/j/jfwpbfroj.css';
import '../../css/v/vm0unel-g.css';
import '../../css/i/ib1_m85zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jemwryzre wm-shadow"/><path class="f_laxpb8u wm-shadow"/><path class="jfwpbfroj"/><path class="vm0unel-g"/><path class="ib1_m85zv"/></g>`,
		"fallback": "withicons-brutal:hard-drive",
	});
}

export default Component;
