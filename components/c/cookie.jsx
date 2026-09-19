import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8pbwebty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8pbwebty"/>`,
		"fallback": "game-icons:cookie",
	});
}

export default Component;
