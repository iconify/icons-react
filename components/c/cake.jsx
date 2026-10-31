import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/g/g7trs0bqv.css';
import '../../css/l/lyj9wex-l.css';
import '../../css/s/sixujpcil.css';
import '../../css/v/vv8_k-bjm.css';
import '../../css/u/uehjw3bvp.css';
import '../../css/e/e1_26u-jm.css';
import '../../css/m/mx66r9q5s.css';
import '../../css/r/rf9y-bc-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGYRtwmhnd" cx="7.42" cy="12.7" r="21.52" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGnOLOBb9F" x1="0" x2="0" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" class="g7trs0bqv"/><stop offset=".5" class="g7trs0bqv"/><stop offset="1" class="pgqql6bua"/></linearGradient></defs><path class="lyj9wex-l wm-shadow"/><path fill="url(#SVGnOLOBb9F)" class="sixujpcil wm-a"/><path fill="url(#SVGYRtwmhnd)" class="vv8_k-bjm wm-k"/><path fill="url(#SVGnOLOBb9F)" class="uehjw3bvp wm-a"/><path class="e1_26u-jm wm-shine"/><path class="mx66r9q5s wm-deco"/><path class="rf9y-bc-r wm-deco"/></g>`,
		"fallback": "withicons-rangoli:cake",
	});
}

export default Component;
