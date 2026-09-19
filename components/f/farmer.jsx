import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig8r8u_xr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig8r8u_xr"/>`,
		"fallback": "game-icons:farmer",
	});
}

export default Component;
