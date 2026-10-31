import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/l/l8vrao9ui.css';
import '../../css/q/qozc-wbkv.css';
import '../../css/w/w6xu-hbvr.css';
import '../../css/t/tqczecbpq.css';
import '../../css/m/mkdv8hvhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGNtLQn34K" cx="9.18" cy="6.46" r="21.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="l8vrao9ui wm-shadow"/><path fill="url(#SVGNtLQn34K)" class="qozc-wbkv wm-k"/><path class="w6xu-hbvr wm-shine"/><path class="tqczecbpq wm-deco"/><path class="mkdv8hvhv wm-deco"/></g>`,
		"fallback": "withicons-rangoli:bluetooth",
	});
}

export default Component;
