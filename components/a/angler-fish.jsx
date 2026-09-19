import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii5c8ebjh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii5c8ebjh"/>`,
		"fallback": "game-icons:angler-fish",
	});
}

export default Component;
