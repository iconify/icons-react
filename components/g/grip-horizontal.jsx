import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/zgg1mccgf.css';
import '../../css/g/gq6vohyca.css';
import '../../css/p/pd7fibbxt.css';
import '../../css/l/lq2150wtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG0cImveZw" x1="10.01" x2="14.01" y1="7.13" y2="16.87" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k zgg1mccgf"/><path class="gq6vohyca wm-deco"/><path fill="url(#SVG0cImveZw)" class="pd7fibbxt wm-k"/><path class="lq2150wtn wm-shadow"/></g>`,
		"fallback": "withicons-valentine:grip-horizontal",
	});
}

export default Component;
