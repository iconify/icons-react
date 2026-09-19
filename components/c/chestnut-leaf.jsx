import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kepe8c3qf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kepe8c3qf"/>`,
		"fallback": "game-icons:chestnut-leaf",
	});
}

export default Component;
