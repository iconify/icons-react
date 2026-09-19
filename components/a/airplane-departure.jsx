import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z35u1dbir.css';
import '../../css/k/kjit__bto.css';
import '../../css/t/tnfhmt7de.css';
import '../../css/z/z3_e54q1e.css';
import '../../css/h/h1rha0bsx.css';
import '../../css/j/jgvv73b6a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z35u1dbir"/><path class="kjit__bto"/><path class="tnfhmt7de"/><path class="z3_e54q1e"/><path class="h1rha0bsx"/><path class="jgvv73b6a"/></g>`,
		"fallback": "fluent-emoji-flat:airplane-departure",
	});
}

export default Component;
