import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h16ti1b7h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h16ti1b7h"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-chess-pawn",
	});
}

export default Component;
