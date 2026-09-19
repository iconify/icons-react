import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urb3y9b6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urb3y9b6e"/>`,
		"fallback": "game-icons:dough-roller",
	});
}

export default Component;
