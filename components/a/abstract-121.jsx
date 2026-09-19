import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg-3jwb_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg-3jwb_c"/>`,
		"fallback": "game-icons:abstract-121",
	});
}

export default Component;
