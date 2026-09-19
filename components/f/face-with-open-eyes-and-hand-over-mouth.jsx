import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qoxz5eb3o.css';
import '../../css/l/lkv6ndiqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qoxz5eb3o"/><path class="lkv6ndiqj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-open-eyes-and-hand-over-mouth",
	});
}

export default Component;
