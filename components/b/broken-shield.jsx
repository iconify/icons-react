import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7qppyyrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7qppyyrc"/>`,
		"fallback": "game-icons:broken-shield",
	});
}

export default Component;
