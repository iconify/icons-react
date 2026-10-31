import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/n/njsdsa-5h.css';
import '../../css/i/is6pqkbrn.css';
import '../../css/z/zhrwl0bpu.css';
import '../../css/u/udt5pkb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGlIHlWc2S" cx="7.64" cy="10.36" r="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="njsdsa-5h wm-shadow"/><path fill="url(#SVGlIHlWc2S)" class="is6pqkbrn wm-k"/><path class="wm-shine zhrwl0bpu"/><path class="udt5pkb8i wm-s"/></g>`,
		"fallback": "withicons-rangoli:heater",
	});
}

export default Component;
