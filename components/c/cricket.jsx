import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drtadmc6e.css';
import '../../css/r/rcf3yquid.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="drtadmc6e"/><path class="rcf3yquid"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cricket",
	});
}

export default Component;
