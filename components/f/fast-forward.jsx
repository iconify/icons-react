import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/v/vfhn6f3is.css';
import '../../css/x/xra0w997h.css';
import '../../css/s/s6smnbajy.css';
import '../../css/v/v8ugmgn4b.css';
import '../../css/b/blkh0bbnn.css';
import '../../css/g/gubypjb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBP4jAedY" x1="10" x2="14" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="vfhn6f3is wm-k"/><path class="wm-a xra0w997h"/><path class="s6smnbajy wm-deco"/><path fill="url(#SVGBP4jAedY)" class="v8ugmgn4b wm-k"/><path class="blkh0bbnn wm-a"/><path class="gubypjb_d wm-shadow"/></g>`,
		"fallback": "withicons-valentine:fast-forward",
	});
}

export default Component;
