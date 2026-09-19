import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uayu3q91h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uayu3q91h"/>`,
		"fallback": "game-icons:crenulated-shield",
	});
}

export default Component;
