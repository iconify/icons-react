import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/w/wfetx9b5h.css';
import '../../css/w/w4gnlobgl.css';
import '../../css/r/rwtx9qbrr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="wfetx9b5h"/><path class="w4gnlobgl"/><path class="rwtx9qbrr"/></g>`,
		"fallback": "fluent-emoji-flat:flushed-face",
	});
}

export default Component;
