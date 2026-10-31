import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/v/vc4d7lmjx.css';
import '../../css/u/uqd9bk1vp.css';
import '../../css/c/c8z27fnhe.css';
import '../../css/y/yq5_uhb0n.css';
import '../../css/u/u-xfn-b4f.css';
import '../../css/c/ccns9-bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGJ0bW9q7z" cx="4.22" cy="6.18" r="19.43" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="vc4d7lmjx wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="uqd9bk1vp wm-a"/><path fill="url(#SVGJ0bW9q7z)" class="c8z27fnhe wm-k"/><path class="wm-shine yq5_uhb0n"/><path class="u-xfn-b4f wm-deco"/><path class="ccns9-bsi wm-deco"/></g>`,
		"fallback": "withicons-rangoli:git-graph",
	});
}

export default Component;
