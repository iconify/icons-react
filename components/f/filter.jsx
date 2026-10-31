import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/w/w-0b1eb5y.css';
import '../../css/p/py9_4d26u.css';
import '../../css/j/jwhtxebim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGiHmXbbZl" cx="7.91" cy="6.78" r="23.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="w-0b1eb5y wm-shadow"/><path fill="url(#SVGiHmXbbZl)" class="py9_4d26u wm-k"/><path class="jwhtxebim wm-shine"/></g>`,
		"fallback": "withicons-rangoli:filter",
	});
}

export default Component;
