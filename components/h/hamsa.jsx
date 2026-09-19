import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-cionbyr.css';
import '../../css/c/c4io32bfc.css';
import '../../css/p/pg0ntdb4v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t-cionbyr"/><path class="c4io32bfc"/><path class="pg0ntdb4v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hamsa",
	});
}

export default Component;
