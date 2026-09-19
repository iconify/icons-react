import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzqo1xb1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzqo1xb1t"/>`,
		"fallback": "game-icons:clockwise-rotation",
	});
}

export default Component;
