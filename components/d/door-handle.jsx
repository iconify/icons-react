import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv9wz8bnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv9wz8bnf"/>`,
		"fallback": "game-icons:door-handle",
	});
}

export default Component;
