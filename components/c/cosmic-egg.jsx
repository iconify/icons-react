import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxbg4sb7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxbg4sb7r"/>`,
		"fallback": "game-icons:cosmic-egg",
	});
}

export default Component;
