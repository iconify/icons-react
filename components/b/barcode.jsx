import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/s8x5cmrrk.css';
import '../../css/y/y77vpmbrz.css';
import '../../css/q/q0o5rdcsb.css';
import '../../css/l/led8gxbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBP4jAedY" x1="10" x2="14" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="s8x5cmrrk wm-k"/><path class="wm-deco y77vpmbrz"/><path fill="url(#SVGBP4jAedY)" class="q0o5rdcsb wm-k"/><path class="led8gxbha wm-shadow"/></g>`,
		"fallback": "withicons-valentine:barcode",
	});
}

export default Component;
