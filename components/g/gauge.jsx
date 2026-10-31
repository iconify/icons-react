import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/znogm4brr.css';
import '../../css/m/ma31erbbj.css';
import '../../css/d/dgaei_bko.css';
import '../../css/u/ul-3z6biq.css';
import '../../css/z/zhsa1vb6d.css';
import '../../css/u/ue85_-bcb.css';
import '../../css/r/rxa3eacse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWx42KdOM" x1="10" x2="14" y1="4.03" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k znogm4brr"/><path class="ma31erbbj wm-deco"/><path class="dgaei_bko wm-k"/><path fill="url(#SVGWx42KdOM)" class="ul-3z6biq wm-k"/><path class="wm-shadow zhsa1vb6d"/><path class="ue85_-bcb wm-shine"/><path class="rxa3eacse wm-shine"/></g>`,
		"fallback": "withicons-valentine:gauge",
	});
}

export default Component;
