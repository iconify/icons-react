import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fntzami3c.css';
import '../../css/b/bg3ys0vnt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fntzami3c"/><path class="bg3ys0vnt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:growing-heart",
	});
}

export default Component;
