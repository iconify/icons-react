import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx3vdt36c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx3vdt36c"/>`,
		"fallback": "game-icons:billed-cap",
	});
}

export default Component;
