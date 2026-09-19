import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gydler2tb.css';
import '../../css/e/e2yatwaus.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gydler2tb"/><path class="e2yatwaus"/></g>`,
		"fallback": "fluent-emoji-high-contrast:desktop-computer",
	});
}

export default Component;
