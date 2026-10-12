import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gd8ngp5ey.css';
import '../../css/n/neaw9iejc.css';
import '../../css/k/kw8zqsv0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gd8ngp5ey"/><path class="neaw9iejc"/><path class="kw8zqsv0e"/></g>`,
		"fallback": "andrsrxn:buildings",
	});
}

export default Component;
