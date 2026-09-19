import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cel9776qd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cel9776qd"/>`,
		"fallback": "game-icons:food-truck",
	});
}

export default Component;
