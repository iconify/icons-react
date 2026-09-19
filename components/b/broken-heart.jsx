import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p9jsv1uun.css';
import '../../css/e/ecbc4xvjq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p9jsv1uun"/><path class="ecbc4xvjq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:broken-heart",
	});
}

export default Component;
