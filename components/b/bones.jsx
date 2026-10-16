import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-lal0pan.css';
import '../../css/j/juay7mg2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-lal0pan"/><path class="juay7mg2q"/></g>`,
		"fallback": "andrsrxn:bones",
	});
}

export default Component;
