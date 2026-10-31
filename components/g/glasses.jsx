import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/aubghroie.css';
import '../../css/k/kggz0-riu.css';
import '../../css/o/o52j2_buu.css';
import '../../css/f/fpgrstd8g.css';
import '../../css/n/nu3oovbhc.css';
import '../../css/l/la-j-2bvj.css';
import '../../css/e/e26f9n8oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGz0ttXQKd" x1="10" x2="14" y1="6.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="aubghroie wm-k"/><path class="kggz0-riu wm-deco"/><path class="o52j2_buu wm-k"/><path fill="url(#SVGz0ttXQKd)" class="fpgrstd8g wm-k"/><path class="nu3oovbhc wm-shadow"/><path class="la-j-2bvj wm-shine"/><path class="e26f9n8oa wm-shine"/></g>`,
		"fallback": "withicons-valentine:glasses",
	});
}

export default Component;
