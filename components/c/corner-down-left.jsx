import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/t0ilv5tgj.css';
import '../../css/r/r0to8et-l.css';
import '../../css/w/wb9_lc_5o.css';
import '../../css/r/r0hkbzbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9FHFpd5y" x1="10" x2="14" y1="3.02" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="t0ilv5tgj wm-k"/><path class="r0to8et-l wm-deco"/><path fill="url(#SVG9FHFpd5y)" class="wb9_lc_5o wm-k"/><path class="r0hkbzbaw wm-shadow"/></g>`,
		"fallback": "withicons-valentine:corner-down-left",
	});
}

export default Component;
