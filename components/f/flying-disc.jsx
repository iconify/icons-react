import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njrty1biu.css';
import '../../css/w/w_zr9qbuu.css';
import '../../css/e/e4id5irvz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="njrty1biu"/><path class="w_zr9qbuu"/><path class="e4id5irvz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:flying-disc",
	});
}

export default Component;
