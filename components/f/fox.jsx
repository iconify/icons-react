import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yl8o4vbhz.css';
import '../../css/v/v436epb-k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yl8o4vbhz"/><path class="v436epb-k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fox",
	});
}

export default Component;
