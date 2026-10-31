import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/b/b97b4ctny.css';
import '../../css/k/k28rt-j0q.css';
import '../../css/e/e-2-lnb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGZUJGvbZI" cx="7.86" cy="7.67" r="23.18" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="b97b4ctny wm-shadow"/><path fill="url(#SVGZUJGvbZI)" class="k28rt-j0q wm-k"/><path class="e-2-lnb4i wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-frog",
	});
}

export default Component;
