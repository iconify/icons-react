import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/a7tr8l3_i.css';
import '../../css/r/rcp09hj5b.css';
import '../../css/n/ny94wc71i.css';
import '../../css/q/qd9210cmt.css';
import '../../css/t/tif8vabgm.css';
import '../../css/z/ze2ps5bam.css';
import '../../css/t/tpl2lf6ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="a7tr8l3_i wm-k"/><path class="rcp09hj5b wm-deco"/><path class="ny94wc71i wm-k"/><path fill="url(#SVG8cgrrczU)" class="qd9210cmt wm-k"/><path class="tif8vabgm wm-shadow"/><path class="wm-shine ze2ps5bam"/><path class="tpl2lf6ja wm-shine"/></g>`,
		"fallback": "withicons-valentine:ban",
	});
}

export default Component;
