import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsdpkljxt.css';
import '../../css/n/nzuqs8x_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsdpkljxt"/><path class="nzuqs8x_q"/></g>`,
		"fallback": "fluent-emoji-flat:ear-medium-dark",
	});
}

export default Component;
