import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n93385b-o.css';
import '../../css/p/p1kjg-i8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n93385b-o"/><path class="p1kjg-i8d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fallen-leaf",
	});
}

export default Component;
