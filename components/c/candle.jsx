import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x644agbfs.css';
import '../../css/u/u15rypvqj.css';
import '../../css/q/q4o552b_p.css';
import '../../css/j/jvku62s7d.css';
import '../../css/h/h8z-9rb0y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x644agbfs"/><path class="u15rypvqj"/><path class="q4o552b_p"/><path class="jvku62s7d"/><path class="h8z-9rb0y"/></g>`,
		"fallback": "fluent-emoji-flat:candle",
	});
}

export default Component;
