import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgr4yzbtn.css';
import '../../css/w/wjekrfb-r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rgr4yzbtn"/><path class="wjekrfb-r"/></g>`,
		"fallback": "fluent-emoji-high-contrast:beaver",
	});
}

export default Component;
