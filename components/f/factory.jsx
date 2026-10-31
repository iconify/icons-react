import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/z/zbg95cdrt.css';
import '../../css/t/t98eyqbnk.css';
import '../../css/j/jeh48vb4b.css';
import '../../css/b/b-z5ram_f.css';
import '../../css/n/n2ztak-ou.css';
import '../../css/r/rdytpbckz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGctINWcQn" cx="7.5" cy="6.85" r="24.56" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow zbg95cdrt"/><path fill="url(#SVGctINWcQn)" class="t98eyqbnk wm-k"/><path class="jeh48vb4b wm-shine"/><path class="b-z5ram_f wm-deco"/><path fill="url(#SVGDCUexbkg)" class="n2ztak-ou wm-deco"/><path class="rdytpbckz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:factory",
	});
}

export default Component;
