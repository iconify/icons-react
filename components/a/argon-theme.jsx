import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl3rdq6eh.css';
import '../../css/p/p8uw2_y-y.css';
import '../../css/x/x7-ndsbds.css';
import '../../css/a/aeem10l4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGSGPlGc1d" x1="21" x2="491" y1="21" y2="491" gradientUnits="userSpaceOnUse"><stop offset="0" class="rl3rdq6eh"/><stop offset="1" class="p8uw2_y-y"/></linearGradient><path fill="url(#SVGSGPlGc1d)" class="x7-ndsbds"/><path class="aeem10l4e"/>`,
		"fallback": "selfhst:argon-theme",
	});
}

export default Component;
