import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtrx35gps.css';
import '../../css/b/bi9enpbzh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dtrx35gps"/><path class="bi9enpbzh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:envelope-with-arrow",
	});
}

export default Component;
