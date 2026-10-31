import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/e/ea95nacez.css';
import '../../css/q/qj-xhdb-y.css';
import '../../css/m/mjum3rbpr.css';
import '../../css/b/bqqkk1bil.css';
import '../../css/b/bez_ugqna.css';
import '../../css/e/e-1gz1b2m.css';
import '../../css/s/squ8ednrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhqTHFOcz" x1="10" x2="14" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ea95nacez wm-k"/><path class="qj-xhdb-y wm-deco"/><path class="mjum3rbpr wm-k"/><path fill="url(#SVGhqTHFOcz)" class="bqqkk1bil wm-k"/><path class="bez_ugqna wm-shadow"/><path class="e-1gz1b2m wm-shine"/><path class="squ8ednrq wm-shine"/></g>`,
		"fallback": "withicons-valentine:eye",
	});
}

export default Component;
