import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsj79bc4l.css';
import '../../css/j/j4za7sb_t.css';
import '../../css/e/ed7attbmr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nsj79bc4l"/><path class="j4za7sb_t"/><path class="ed7attbmr"/></g>`,
		"fallback": "fluent-emoji-flat:cricket",
	});
}

export default Component;
