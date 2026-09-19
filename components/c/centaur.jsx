import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2qndjqkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2qndjqkl"/>`,
		"fallback": "game-icons:centaur",
	});
}

export default Component;
