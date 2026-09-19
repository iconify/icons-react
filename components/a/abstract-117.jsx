import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2q0bvqih.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2q0bvqih"/>`,
		"fallback": "game-icons:abstract-117",
	});
}

export default Component;
