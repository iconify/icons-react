import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lidly0psk.css';
import '../../css/f/fu0998bcw.css';
import '../../css/j/jjop9bbgu.css';
import '../../css/g/gznqbi-xb.css';
import '../../css/m/mi1zcsp2c.css';
import '../../css/i/iq0by4bky.css';
import '../../css/h/hysrnzbfz.css';
import '../../css/g/grqf7vbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtl0ZkcFC" x1="10" x2="14" y1="2.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lidly0psk wm-k"/><path class="fu0998bcw wm-a"/><path class="jjop9bbgu wm-deco"/><path fill="url(#SVGtl0ZkcFC)" class="gznqbi-xb wm-k"/><path class="mi1zcsp2c wm-a"/><path class="iq0by4bky wm-shadow"/><path class="hysrnzbfz wm-shine"/><path class="grqf7vbxd wm-shine"/></g>`,
		"fallback": "withicons-valentine:chart-area",
	});
}

export default Component;
