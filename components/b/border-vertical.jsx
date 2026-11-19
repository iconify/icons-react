import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3cn5ebcq.css';
import '../../css/l/l80jzk36j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3cn5ebcq"/><path class="l80jzk36j"/></g>`,
		"fallback": "andrsrxn:border-vertical",
	});
}

export default Component;
