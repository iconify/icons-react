import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/i/idmqhsb4s.css';
import '../../css/x/xz4mkhliz.css';
import '../../css/t/tx9jrobfn.css';
import '../../css/w/wxnuoac6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGIRmTDeEa" cx="7.42" cy="6.75" r="22.72" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="idmqhsb4s wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wm-a xz4mkhliz"/><path fill="url(#SVGIRmTDeEa)" class="tx9jrobfn wm-k"/><path class="wm-shine wxnuoac6a"/></g>`,
		"fallback": "withicons-rangoli:certificate",
	});
}

export default Component;
