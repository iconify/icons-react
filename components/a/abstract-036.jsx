import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okun-gatz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okun-gatz"/>`,
		"fallback": "game-icons:abstract-036",
	});
}

export default Component;
