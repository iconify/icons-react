import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/m/m4spbjbwt.css';
import '../../css/i/ia-7yvb-t.css';
import '../../css/z/zz7hss83f.css';
import '../../css/k/kk9m7vbeg.css';
import '../../css/a/ack5agbkk.css';
import '../../css/i/inb-3wofi.css';
import '../../css/x/xx8krcceg.css';
import '../../css/h/hob913dho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGs75RxbPO" x1="10" x2="14" y1="3.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="m4spbjbwt wm-k"/><path class="ia-7yvb-t wm-a"/><path class="wm-deco zz7hss83f"/><path fill="url(#SVGs75RxbPO)" class="kk9m7vbeg wm-k"/><path class="ack5agbkk wm-a"/><path class="inb-3wofi wm-shadow"/><path class="wm-shine xx8krcceg"/><path class="hob913dho wm-shine"/></g>`,
		"fallback": "withicons-valentine:chart-column-stacked",
	});
}

export default Component;
