import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgw9obqmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgw9obqmx"/>`,
		"fallback": "game-icons:abstract-034",
	});
}

export default Component;
