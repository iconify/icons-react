import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cisyq9bjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cisyq9bjj"/>`,
		"fallback": "game-icons:despair",
	});
}

export default Component;
