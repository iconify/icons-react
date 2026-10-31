import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/uchz4q29d.css';
import '../../css/m/mhl2_-bfc.css';
import '../../css/c/c_b0uoubs.css';
import '../../css/c/c-x1p5hiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGEKpCPe5o" x1="10" x2="14" y1="1.52" y2="22.07" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="uchz4q29d wm-k"/><path class="mhl2_-bfc wm-deco"/><path fill="url(#SVGEKpCPe5o)" class="c_b0uoubs wm-k"/><path class="c-x1p5hiw wm-shadow"/></g>`,
		"fallback": "withicons-valentine:cube",
	});
}

export default Component;
