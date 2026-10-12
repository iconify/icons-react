import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnu2vgbrj.css';
import '../../css/j/jllqj-qnq.css';
import '../../css/g/g787p2b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dnu2vgbrj"/><path class="jllqj-qnq"/><path class="g787p2b1h"/></g>`,
		"fallback": "andrsrxn:door-stairs",
	});
}

export default Component;
