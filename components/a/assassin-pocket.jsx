import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogq8z8wpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogq8z8wpz"/>`,
		"fallback": "game-icons:assassin-pocket",
	});
}

export default Component;
