import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/w5t8i3bcx.css';
import '../../css/f/foc_hzbev.css';
import '../../css/i/ipqcjcbuu.css';
import '../../css/s/s0-2tq0cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGK4IHWdYZ" x1="10" x2="14" y1="5.51" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="w5t8i3bcx wm-k"/><path class="foc_hzbev wm-deco"/><path fill="url(#SVGK4IHWdYZ)" class="ipqcjcbuu wm-k"/><path class="s0-2tq0cw wm-shadow"/></g>`,
		"fallback": "withicons-valentine:arrow-down-left",
	});
}

export default Component;
