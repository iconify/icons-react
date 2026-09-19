import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ylelbkbmr.css';
import '../../css/u/u6nulbw7l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ylelbkbmr"/><path class="u6nulbw7l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-head-bandage",
	});
}

export default Component;
