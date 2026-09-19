import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rwgufac6t.css';
import '../../css/k/koyoq5boo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rwgufac6t"/><path class="koyoq5boo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:heart-with-arrow",
	});
}

export default Component;
