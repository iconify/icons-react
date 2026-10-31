import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/r/rhc3bacsq.css';
import '../../css/f/fq8rzvd0j.css';
import '../../css/c/cqhtm535q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnreWddSd" cx="7.64" cy="7.13" r="24.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="rhc3bacsq wm-shadow"/><path fill="url(#SVGnreWddSd)" class="fq8rzvd0j wm-k"/><path class="cqhtm535q wm-shine"/></g>`,
		"fallback": "withicons-rangoli:heart-pulse",
	});
}

export default Component;
