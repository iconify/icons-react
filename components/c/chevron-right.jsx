import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/tco4i9q9t.css';
import '../../css/h/hom636bsn.css';
import '../../css/i/ip_656b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3U4MbeZE" x1="10" x2="14" y1="5.02" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="tco4i9q9t wm-k"/><path class="hom636bsn wm-deco"/><path fill="url(#SVG3U4MbeZE)" class="ip_656b_v wm-k"/></g>`,
		"fallback": "withicons-valentine:chevron-right",
	});
}

export default Component;
