import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/c/cj-9p2dpm.css';
import '../../css/a/alzg3uyjm.css';
import '../../css/w/wms2w7b_f.css';
import '../../css/h/hf6fpwbpu.css';
import '../../css/y/y8wzhshft.css';
import '../../css/m/m36vlt_-f.css';
import '../../css/g/gv_8cl69e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVLgGBcyY" x1="10" x2="14" y1="1.52" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="cj-9p2dpm wm-k"/><path class="alzg3uyjm wm-deco"/><path class="wm-k wms2w7b_f"/><path fill="url(#SVGVLgGBcyY)" class="hf6fpwbpu wm-k"/><path class="wm-shadow y8wzhshft"/><path class="m36vlt_-f wm-shine"/><path class="gv_8cl69e wm-shine"/></g>`,
		"fallback": "withicons-valentine:fan",
	});
}

export default Component;
