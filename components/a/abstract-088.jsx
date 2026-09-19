import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy394kbka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy394kbka"/>`,
		"fallback": "game-icons:abstract-088",
	});
}

export default Component;
