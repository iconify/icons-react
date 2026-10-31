import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/t/tv1sbsm7m.css';
import '../../css/f/f9ar-ub8z.css';
import '../../css/o/o12nyfw6a.css';
import '../../css/l/lib4ew5qz.css';
import '../../css/m/m8tip90-n.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/l/l21kic2ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGvYfKoecE" cx="7.64" cy="6.85" r="24.89" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="tv1sbsm7m wm-shadow"/><path fill="url(#SVGvYfKoecE)" class="f9ar-ub8z wm-k"/><path class="o12nyfw6a wm-k"/><path class="lib4ew5qz wm-k"/><path class="m8tip90-n wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="l21kic2ie wm-deco"/></g>`,
		"fallback": "withicons-rangoli:bot-message-square",
	});
}

export default Component;
