import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/vz78agbjg.css';
import '../../css/u/uahgtvhbg.css';
import '../../css/p/p36t0xb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN1oYpimo" x1="10" x2="14" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="vz78agbjg wm-k"/><path class="uahgtvhbg wm-deco"/><path fill="url(#SVGN1oYpimo)" class="p36t0xb_j wm-k"/></g>`,
		"fallback": "withicons-valentine:align-center",
	});
}

export default Component;
