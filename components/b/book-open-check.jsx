import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/a/au-zxdawk.css';
import '../../css/c/c0d6jqbtb.css';
import '../../css/z/znb90-yru.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/c/c3uasoyqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGur3QzePf" cx="7.64" cy="7.52" r="23.96" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="au-zxdawk wm-shadow"/><path fill="url(#SVGur3QzePf)" class="c0d6jqbtb wm-k"/><path class="wm-shine znb90-yru"/><path class="gyytzlc5m wm-deco"/><path class="c3uasoyqz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:book-open-check",
	});
}

export default Component;
