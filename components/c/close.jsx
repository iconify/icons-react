import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/x/xcxbmob8e.css';
import '../../css/i/igtfcbc7i.css';
import '../../css/q/q25g2bckm.css';
import '../../css/x/xfkhs5dym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQXQnRcgA" x1="10" x2="14" y1="5" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k xcxbmob8e"/><path class="igtfcbc7i wm-deco"/><path fill="url(#SVGQXQnRcgA)" class="q25g2bckm wm-k"/><path class="wm-shadow xfkhs5dym"/></g>`,
		"fallback": "withicons-valentine:close",
	});
}

export default Component;
