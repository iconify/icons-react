import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id8ma2b6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id8ma2b6i"/>`,
		"fallback": "game-icons:door-ring-handle",
	});
}

export default Component;
