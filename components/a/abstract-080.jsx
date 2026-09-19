import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu98br64n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu98br64n"/>`,
		"fallback": "game-icons:abstract-080",
	});
}

export default Component;
