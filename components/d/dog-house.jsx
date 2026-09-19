import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5z_ev-up.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5z_ev-up"/>`,
		"fallback": "game-icons:dog-house",
	});
}

export default Component;
