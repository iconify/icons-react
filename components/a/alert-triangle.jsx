import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/p/pgn9wpb3a.css';
import '../../css/v/vpvoarcdg.css';
import '../../css/y/yz9jf-e1c.css';
import '../../css/f/f9zy4p92x.css';
import '../../css/y/yjle3gx7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGDyIWEbsE" cx="7.29" cy="6.35" r="25.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="pgn9wpb3a wm-shadow"/><path fill="url(#SVGDyIWEbsE)" class="vpvoarcdg wm-k"/><path class="wm-shine yz9jf-e1c"/><path class="f9zy4p92x wm-deco"/><path class="wm-deco yjle3gx7g"/></g>`,
		"fallback": "withicons-rangoli:alert-triangle",
	});
}

export default Component;
