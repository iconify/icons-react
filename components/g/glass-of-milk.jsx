import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynyl4jbvq.css';
import '../../css/d/dfr81me3b.css';
import '../../css/x/xo8slzqda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ynyl4jbvq"/><path class="dfr81me3b"/><path class="xo8slzqda"/></g>`,
		"fallback": "fluent-emoji-flat:glass-of-milk",
	});
}

export default Component;
