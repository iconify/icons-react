import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/hb3_pmbky.css';
import '../../css/g/gvd5vxl3k.css';
import '../../css/u/u14r4ko_h.css';
import '../../css/b/bke8g1ull.css';
import '../../css/f/ff7-8qnqo.css';
import '../../css/h/hxe5-2blm.css';
import '../../css/m/muvjxyb-k.css';
import '../../css/b/ba9x07ybt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGuNXHd4A" x1="10.01" x2="14.01" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="hb3_pmbky wm-k"/><path class="gvd5vxl3k wm-a"/><path class="u14r4ko_h wm-deco"/><path fill="url(#SVGGuNXHd4A)" class="bke8g1ull wm-k"/><path class="ff7-8qnqo wm-a"/><path class="hxe5-2blm wm-shadow"/><path class="muvjxyb-k wm-shine"/><path class="ba9x07ybt wm-shine"/></g>`,
		"fallback": "withicons-valentine:chart-pie",
	});
}

export default Component;
