import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uok-79bon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uok-79bon"/>`,
		"fallback": "game-icons:atomic-slashes",
	});
}

export default Component;
