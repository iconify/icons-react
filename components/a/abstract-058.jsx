import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efm3k2f6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efm3k2f6o"/>`,
		"fallback": "game-icons:abstract-058",
	});
}

export default Component;
