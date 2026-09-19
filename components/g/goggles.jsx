import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1iz6ub5n.css';
import '../../css/w/wfd1ngfbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1iz6ub5n"/><path class="wfd1ngfbk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:goggles",
	});
}

export default Component;
