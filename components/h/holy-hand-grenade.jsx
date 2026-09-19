import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4mz3x9tv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4mz3x9tv"/>`,
		"fallback": "game-icons:holy-hand-grenade",
	});
}

export default Component;
