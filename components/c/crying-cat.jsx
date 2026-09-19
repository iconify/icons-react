import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwox7w1fm.css';
import '../../css/p/p6gvc2bts.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rwox7w1fm"/><path class="p6gvc2bts"/></g>`,
		"fallback": "fluent-emoji-high-contrast:crying-cat",
	});
}

export default Component;
