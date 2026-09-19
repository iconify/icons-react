import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5gdpl4fa.css';
import '../../css/i/if6xh6bvd.css';
import '../../css/y/yo7go3bgl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5gdpl4fa"/><path class="if6xh6bvd"/><path class="yo7go3bgl"/>`,
		"fallback": "fxemoji:fire",
	});
}

export default Component;
