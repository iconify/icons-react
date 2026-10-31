import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/fefu7bm7q.css';
import '../../css/j/jpnuigg4b.css';
import '../../css/l/lzssjpbag.css';
import '../../css/h/hcmio0c8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN1oYpimo" x1="10" x2="14" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="fefu7bm7q wm-k"/><path class="jpnuigg4b wm-deco"/><path fill="url(#SVGN1oYpimo)" class="lzssjpbag wm-k"/><path class="hcmio0c8h wm-shadow"/></g>`,
		"fallback": "withicons-valentine:indent-decrease",
	});
}

export default Component;
