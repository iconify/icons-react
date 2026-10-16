import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0hwrl1oi.css';
import '../../css/q/qol0w3b_j.css';
import '../../css/w/wlowl6bhy.css';

const viewBox = {"width":360,"height":360};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0hwrl1oi"/><path class="qol0w3b_j"/><path class="wlowl6bhy"/>`,
		"fallback": "thesvg-color:contour-light",
	});
}

export default Component;
