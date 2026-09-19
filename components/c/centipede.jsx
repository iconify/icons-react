import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moswyxuab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moswyxuab"/>`,
		"fallback": "game-icons:centipede",
	});
}

export default Component;
