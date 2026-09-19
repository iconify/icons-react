import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni_vnr39t.css';
import '../../css/k/ksqo97b1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ni_vnr39t"/><path class="ksqo97b1d"/></g>`,
		"fallback": "fluent-emoji-flat:call-me-hand-medium-dark",
	});
}

export default Component;
