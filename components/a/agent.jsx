import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfo6tr8zj.css';
import '../../css/g/gir26e-6w.css';
import '../../css/a/a_1n59qvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfo6tr8zj"/><path class="gir26e-6w"/><path class="a_1n59qvo"/></g>`,
		"fallback": "andrsrxn:agent",
	});
}

export default Component;
