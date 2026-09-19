import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd4x53h2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd4x53h2b"/>`,
		"fallback": "game-icons:hunting-bolas",
	});
}

export default Component;
