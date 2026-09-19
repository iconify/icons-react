import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk5v4w-nd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk5v4w-nd"/>`,
		"fallback": "game-icons:abstract-075",
	});
}

export default Component;
