import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei7q5jb4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei7q5jb4k"/>`,
		"fallback": "game-icons:armor-downgrade",
	});
}

export default Component;
