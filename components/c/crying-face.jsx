import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/h/h9iiy9t5d.css';
import '../../css/b/bz88usbcx.css';
import '../../css/e/e28m_cc9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="h9iiy9t5d"/><path class="bz88usbcx"/><path class="e28m_cc9t"/></g>`,
		"fallback": "fluent-emoji-flat:crying-face",
	});
}

export default Component;
