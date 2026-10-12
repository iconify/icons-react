import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n70vqqbfd.css';
import '../../css/d/dnils5bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n70vqqbfd"/><path class="dnils5bfy"/></g>`,
		"fallback": "andrsrxn:flip-horizontal",
	});
}

export default Component;
