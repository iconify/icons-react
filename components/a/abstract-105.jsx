import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ohzz2ni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ohzz2ni"/>`,
		"fallback": "game-icons:abstract-105",
	});
}

export default Component;
