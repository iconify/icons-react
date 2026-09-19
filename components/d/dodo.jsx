import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tvq0sobma.css';
import '../../css/m/mtefwnu8k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tvq0sobma"/><path class="mtefwnu8k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dodo",
	});
}

export default Component;
