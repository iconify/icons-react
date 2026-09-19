import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyjtk83dk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyjtk83dk"/>`,
		"fallback": "game-icons:card-jack-hearts",
	});
}

export default Component;
