import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcywz3bnr.css';
import '../../css/c/ckt0vpt3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcywz3bnr"/><path class="ckt0vpt3b"/></g>`,
		"fallback": "fluent-emoji-flat:crossed-fingers-medium-light",
	});
}

export default Component;
