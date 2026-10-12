import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c8l3kicbf.css';
import '../../css/h/h1gruxblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c8l3kicbf"/><path class="h1gruxblw"/></g>`,
		"fallback": "andrsrxn:fence",
	});
}

export default Component;
