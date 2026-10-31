import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/ya-uidwpo.css';
import '../../css/p/p9x-6gmxo.css';
import '../../css/j/je_anqbyj.css';
import '../../css/i/iku5v-npf.css';
import '../../css/c/cyujvs_dw.css';
import '../../css/z/zsvgiucwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGceLu8bXY" x1="10" x2="14" y1="5.14" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k ya-uidwpo"/><path class="p9x-6gmxo wm-k"/><path fill="url(#SVGceLu8bXY)" class="je_anqbyj wm-k"/><path class="iku5v-npf wm-shadow"/><path class="cyujvs_dw wm-shine"/><path class="wm-shine zsvgiucwu"/></g>`,
		"fallback": "withicons-valentine:avatar-tiger",
	});
}

export default Component;
