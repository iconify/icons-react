import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agiv8wo9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agiv8wo9h"/>`,
		"fallback": "game-icons:animal-skull",
	});
}

export default Component;
