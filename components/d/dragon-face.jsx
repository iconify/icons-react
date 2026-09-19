import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugsy4sk-q.css';
import '../../css/u/ulipbdbby.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ugsy4sk-q"/><path class="ulipbdbby"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dragon-face",
	});
}

export default Component;
