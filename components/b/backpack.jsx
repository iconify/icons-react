import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnoc_cc4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnoc_cc4u"/>`,
		"fallback": "game-icons:backpack",
	});
}

export default Component;
