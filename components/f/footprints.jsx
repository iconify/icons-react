import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/hnslqxbnc.css';
import '../../css/o/od1ea864t.css';
import '../../css/n/nhphxoniu.css';
import '../../css/n/nmr0q27zz.css';
import '../../css/h/hydzlmbej.css';
import '../../css/b/bkuhbhb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGuNXHd4A" x1="10.01" x2="14.01" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="hnslqxbnc wm-k"/><path class="od1ea864t wm-deco"/><path fill="url(#SVGGuNXHd4A)" class="nhphxoniu wm-k"/><path class="nmr0q27zz wm-shadow"/><path class="hydzlmbej wm-shine"/><path class="bkuhbhb7f wm-shine"/></g>`,
		"fallback": "withicons-valentine:footprints",
	});
}

export default Component;
