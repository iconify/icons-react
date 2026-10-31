import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/n/ndekbq2vl.css';
import '../../css/f/fbmz77bsv.css';
import '../../css/u/uh7zfpbvk.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/k/kp17p5brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGGRAKoell" cx="7.34" cy="7.09" r="25.38" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="ndekbq2vl wm-shadow"/><path fill="url(#SVGGRAKoell)" class="fbmz77bsv wm-k"/><path class="uh7zfpbvk wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="kp17p5brq wm-deco"/></g>`,
		"fallback": "withicons-rangoli:brain",
	});
}

export default Component;
