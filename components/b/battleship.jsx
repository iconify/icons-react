import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fafjl7bfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fafjl7bfx"/>`,
		"fallback": "game-icons:battleship",
	});
}

export default Component;
