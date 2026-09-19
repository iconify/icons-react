import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5q87d9nt.css';
import '../../css/h/hric9xbvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o5q87d9nt"/><path class="hric9xbvy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:2nd-place-medal",
	});
}

export default Component;
