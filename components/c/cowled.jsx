import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb8b2yvin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb8b2yvin"/>`,
		"fallback": "game-icons:cowled",
	});
}

export default Component;
