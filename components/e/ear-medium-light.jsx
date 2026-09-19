import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlolrlb4o.css';
import '../../css/w/w6nz3ac_n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlolrlb4o"/><path class="w6nz3ac_n"/></g>`,
		"fallback": "fluent-emoji-flat:ear-medium-light",
	});
}

export default Component;
