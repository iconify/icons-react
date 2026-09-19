import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjbgx_b2s.css';
import '../../css/t/t0qu0_56z.css';
import '../../css/x/x5cecvb0y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjbgx_b2s"/><path class="t0qu0_56z"/><path class="x5cecvb0y"/></g>`,
		"fallback": "fluent-emoji-flat:glasses",
	});
}

export default Component;
