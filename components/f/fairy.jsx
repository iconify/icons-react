import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyy7pdbxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyy7pdbxb"/>`,
		"fallback": "game-icons:fairy",
	});
}

export default Component;
