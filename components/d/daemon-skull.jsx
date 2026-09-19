import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isq8ce6ad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isq8ce6ad"/>`,
		"fallback": "game-icons:daemon-skull",
	});
}

export default Component;
