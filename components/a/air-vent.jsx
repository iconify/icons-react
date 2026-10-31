import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wgo1149_l.css';
import '../../css/j/j9ebubi3y.css';
import '../../css/a/al-6wx1ez.css';
import '../../css/y/y4469qb1y.css';
import '../../css/f/fa61uvbhw.css';
import '../../css/z/zp8bd0ixe.css';
import '../../css/d/dj0ymts_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgJw3l6ls" x1="10" x2="14" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wgo1149_l wm-k"/><path class="j9ebubi3y wm-a"/><path class="al-6wx1ez wm-deco"/><path class="wm-k y4469qb1y"/><path fill="url(#SVGgJw3l6ls)" class="fa61uvbhw wm-k"/><path class="wm-a zp8bd0ixe"/><path class="dj0ymts_n wm-shadow"/></g>`,
		"fallback": "withicons-valentine:air-vent",
	});
}

export default Component;
