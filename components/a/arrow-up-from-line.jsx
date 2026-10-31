import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/a_z5fmb5e.css';
import '../../css/k/k8ui5wnhh.css';
import '../../css/h/hsrorld8u.css';
import '../../css/i/idy_xfccs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH854iddR" x1="10" x2="14" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="a_z5fmb5e wm-k"/><path class="k8ui5wnhh wm-deco"/><path fill="url(#SVGH854iddR)" class="hsrorld8u wm-k"/><path class="idy_xfccs wm-shadow"/></g>`,
		"fallback": "withicons-valentine:arrow-up-from-line",
	});
}

export default Component;
