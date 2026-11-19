import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heuu0yhhf.css';
import '../../css/w/w-sev8bli.css';
import '../../css/i/ivfgshkmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="heuu0yhhf"/><path class="w-sev8bli"/><path class="ivfgshkmb"/></g>`,
		"fallback": "andrsrxn:door-box",
	});
}

export default Component;
