import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/dxxap9b9f.css';
import '../../css/h/htra427zq.css';
import '../../css/t/tttjevsuk.css';
import '../../css/b/bm15owgdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7vqYnd5P" x1="9.87" x2="13.87" y1="4.5" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="dxxap9b9f wm-k"/><path class="htra427zq wm-deco"/><path fill="url(#SVG7vqYnd5P)" class="tttjevsuk wm-k"/><path class="bm15owgdy wm-shadow"/></g>`,
		"fallback": "withicons-valentine:case-upper",
	});
}

export default Component;
