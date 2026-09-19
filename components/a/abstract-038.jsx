import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_2b6abro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_2b6abro"/>`,
		"fallback": "game-icons:abstract-038",
	});
}

export default Component;
