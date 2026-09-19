import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whh48vb4o.css';
import '../../css/h/h0su0acwb.css';
import '../../css/q/q_hwkxbcq.css';
import '../../css/r/rpqj6goaw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whh48vb4o"/><path class="h0su0acwb"/><path class="q_hwkxbcq"/><path class="rpqj6goaw"/></g>`,
		"fallback": "fluent-emoji-flat:beetle",
	});
}

export default Component;
