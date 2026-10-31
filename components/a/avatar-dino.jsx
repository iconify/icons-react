import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/b/bkgoh8bym.css';
import '../../css/b/bwmwqwnyz.css';
import '../../css/k/kbgbgeojk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGRuj4ccjx" cx="7.78" cy="6.33" r="26.03" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="bkgoh8bym wm-shadow"/><path fill="url(#SVGRuj4ccjx)" class="bwmwqwnyz wm-k"/><path class="kbgbgeojk wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-dino",
	});
}

export default Component;
