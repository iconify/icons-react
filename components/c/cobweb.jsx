import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntbt6bcny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntbt6bcny"/>`,
		"fallback": "game-icons:cobweb",
	});
}

export default Component;
