import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrx78fg6b.css';
import '../../css/r/rqs7i8b7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yrx78fg6b"/><path class="rqs7i8b7b"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cat-with-wry-smile",
	});
}

export default Component;
