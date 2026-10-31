import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/ja0pp9b1t.css';
import '../../css/g/gzg23rbpy.css';
import '../../css/e/epd4g9bqe.css';
import '../../css/w/w9ta5ccwi.css';
import '../../css/p/pld7ilitp.css';
import '../../css/y/yj5o9k_oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ja0pp9b1t wm-k"/><path class="gzg23rbpy wm-deco"/><path fill="url(#SVG8cgrrczU)" class="epd4g9bqe wm-k"/><path class="w9ta5ccwi wm-shadow"/><path class="pld7ilitp wm-shine"/><path class="wm-shine yj5o9k_oo"/></g>`,
		"fallback": "withicons-valentine:circle",
	});
}

export default Component;
