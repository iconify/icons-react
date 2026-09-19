import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5-cxgkzf.css';
import '../../css/j/jayh6acws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5-cxgkzf"/><path class="jayh6acws"/></g>`,
		"fallback": "fluent-emoji-flat:ear-light",
	});
}

export default Component;
