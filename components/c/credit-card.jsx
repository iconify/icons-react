import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/ykqvgabcz.css';
import '../../css/p/pmg4hc8-m.css';
import '../../css/y/y0p71h4ik.css';
import '../../css/x/xfbym7xgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhqTHFOcz" x1="10" x2="14" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k ykqvgabcz"/><path class="pmg4hc8-m wm-k"/><path fill="url(#SVGhqTHFOcz)" class="wm-k y0p71h4ik"/><path class="wm-shadow xfbym7xgy"/></g>`,
		"fallback": "withicons-valentine:credit-card",
	});
}

export default Component;
