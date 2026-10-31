import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/ie8l27t_n.css';
import '../../css/y/yihs9-b8c.css';
import '../../css/n/n4xjffbzt.css';
import '../../css/o/owrzx-bft.css';
import '../../css/l/lh1e8hhhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ie8l27t_n wm-k"/><path fill="url(#SVGWIPAFndQ)" class="wm-k yihs9-b8c"/><path class="n4xjffbzt wm-shadow"/><path class="owrzx-bft wm-shine"/><path class="lh1e8hhhh wm-shine"/></g>`,
		"fallback": "withicons-valentine:circuit-board",
	});
}

export default Component;
