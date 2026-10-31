import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/x/xwaxr_b1b.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/o/ou2eu8b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGyrVYjefD" cx="7.78" cy="6.62" r="24.44" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path fill="url(#SVGyrVYjefD)" class="wm-k xwaxr_b1b"/><path class="gyytzlc5m wm-deco"/><path class="ou2eu8b2q wm-deco"/></g>`,
		"fallback": "withicons-rangoli:command",
	});
}

export default Component;
