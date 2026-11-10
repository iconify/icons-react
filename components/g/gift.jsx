import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f92kqb6ma.css';
import '../../css/z/zjrbapbhc.css';
import '../../css/l/l3oazccdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f92kqb6ma"/><path class="zjrbapbhc"/><path class="l3oazccdk"/></g>`,
		"fallback": "andrsrxn:gift",
	});
}

export default Component;
