import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/j6j1kjwpg.css';
import '../../css/w/w1582ncmb.css';
import '../../css/q/qem930oky.css';
import '../../css/k/kff6z0bsp.css';
import '../../css/d/dpshrltot.css';
import '../../css/m/mgs3v0bys.css';
import '../../css/c/c72mfcvgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYssIodmf" x1="10" x2="14" y1="3.02" y2="22.12" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="j6j1kjwpg wm-k"/><path class="w1582ncmb wm-deco"/><path class="qem930oky wm-k"/><path fill="url(#SVGYssIodmf)" class="kff6z0bsp wm-k"/><path class="dpshrltot wm-shadow"/><path class="mgs3v0bys wm-shine"/><path class="c72mfcvgb wm-shine"/></g>`,
		"fallback": "withicons-valentine:avatar-ghost",
	});
}

export default Component;
