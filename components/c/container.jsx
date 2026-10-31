import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/kr8w-rd6l.css';
import '../../css/d/dbiq6dksa.css';
import '../../css/p/pdmmvub1q.css';
import '../../css/e/enortgvbe.css';
import '../../css/q/qh3s5hbwb.css';
import '../../css/r/rceh-wb-f.css';
import '../../css/z/z81a2ltus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN1oYpimo" x1="10" x2="14" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="kr8w-rd6l wm-k"/><path class="dbiq6dksa wm-deco"/><path class="pdmmvub1q wm-k"/><path fill="url(#SVGN1oYpimo)" class="enortgvbe wm-k"/><path class="qh3s5hbwb wm-shadow"/><path class="rceh-wb-f wm-shine"/><path class="wm-shine z81a2ltus"/></g>`,
		"fallback": "withicons-valentine:container",
	});
}

export default Component;
