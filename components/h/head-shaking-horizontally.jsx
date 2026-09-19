import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f3z9k5c9o.css';
import '../../css/b/binan9bjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f3z9k5c9o"/><path class="binan9bjo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:head-shaking-horizontally",
	});
}

export default Component;
