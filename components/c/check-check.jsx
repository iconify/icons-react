import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/vhzsvhxqt.css';
import '../../css/x/x7-g55xtf.css';
import '../../css/v/vw-q84bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmpFNqdDk" x1="10" x2="14" y1="6" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="vhzsvhxqt wm-k"/><path class="wm-deco x7-g55xtf"/><path fill="url(#SVGmpFNqdDk)" class="vw-q84bnb wm-k"/></g>`,
		"fallback": "withicons-valentine:check-check",
	});
}

export default Component;
