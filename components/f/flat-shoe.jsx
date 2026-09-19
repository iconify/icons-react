import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz-py2b_h.css';
import '../../css/p/pk9t0jekh.css';
import '../../css/w/wm-kebctg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz-py2b_h"/><path class="pk9t0jekh"/><path class="wm-kebctg"/></g>`,
		"fallback": "fluent-emoji-flat:flat-shoe",
	});
}

export default Component;
