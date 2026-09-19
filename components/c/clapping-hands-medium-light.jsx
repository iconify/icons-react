import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmdtuf_bc.css';
import '../../css/w/wtjo52b3q.css';
import '../../css/o/od15sbhwu.css';
import '../../css/x/x6yya6_0p.css';
import '../../css/q/qz4i1ebmb.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wmdtuf_bc"/><path class="wtjo52b3q"/><path class="od15sbhwu"/><path class="x6yya6_0p"/><path class="qz4i1ebmb"/><path class="cfx1q448n"/></g>`,
		"fallback": "fluent-emoji-flat:clapping-hands-medium-light",
	});
}

export default Component;
