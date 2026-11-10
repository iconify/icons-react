import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8po4pbsd.css';
import '../../css/t/t-z0-bcfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8po4pbsd"/><path class="t-z0-bcfa"/></g>`,
		"fallback": "andrsrxn:floor-plan",
	});
}

export default Component;
