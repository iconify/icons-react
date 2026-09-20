import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpsiiab0r.css';
import '../../css/i/ivcy6gb4b.css';
import '../../css/j/jxkh7fuzr.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kltkxu7pk.css';
import '../../css/f/fnabs1bao.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dpsiiab0r"><path class="ivcy6gb4b"/><path class="jxkh7fuzr"/></g><g class="ij2x_72vy"><path class="kltkxu7pk"/><path class="fnabs1bao"/></g>`,
		"fallback": "openmoji:bat",
	});
}

export default Component;
