import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/gtyp03fhu.css';
import '../../css/y/yqc3ii2vy.css';
import '../../css/t/t5n79ablm.css';
import '../../css/t/t-32sxnwy.css';
import '../../css/u/u0u1fwbvk.css';
import '../../css/q/q9ggr_zqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgJw3l6ls" x1="10" x2="14" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="gtyp03fhu wm-k"/><path class="wm-deco yqc3ii2vy"/><path fill="url(#SVGgJw3l6ls)" class="t5n79ablm wm-k"/><path class="t-32sxnwy wm-shadow"/><path class="u0u1fwbvk wm-shine"/><path class="q9ggr_zqt wm-shine"/></g>`,
		"fallback": "withicons-valentine:fence",
	});
}

export default Component;
