import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjb5cacll.css';
import '../../css/c/c91i3brkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hjb5cacll"/><path class="c91i3brkj"/></g>`,
		"fallback": "fluent-emoji-flat:ear",
	});
}

export default Component;
