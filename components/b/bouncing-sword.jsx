import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxnef9jnz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxnef9jnz"/>`,
		"fallback": "game-icons:bouncing-sword",
	});
}

export default Component;
