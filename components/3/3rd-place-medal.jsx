import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivpb4-but.css';
import '../../css/h/hric9xbvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivpb4-but"/><path class="hric9xbvy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:3rd-place-medal",
	});
}

export default Component;
