import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzwd4pktt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzwd4pktt"/>`,
		"fallback": "game-icons:chemical-bolt",
	});
}

export default Component;
