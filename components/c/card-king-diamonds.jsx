import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbkl6_-bu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbkl6_-bu"/>`,
		"fallback": "game-icons:card-king-diamonds",
	});
}

export default Component;
