import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/v40-c7-zx.css';
import '../../css/o/oblehnbdh.css';
import '../../css/t/ti1utwbns.css';
import '../../css/n/n5ol_s_hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH854iddR" x1="10" x2="14" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="v40-c7-zx wm-k"/><path class="oblehnbdh wm-deco"/><path fill="url(#SVGH854iddR)" class="ti1utwbns wm-k"/><path class="n5ol_s_hb wm-shadow"/></g>`,
		"fallback": "withicons-valentine:braces",
	});
}

export default Component;
