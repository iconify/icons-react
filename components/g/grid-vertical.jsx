import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj5bu7vpf.css';
import '../../css/f/fdk4kacmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hj5bu7vpf"/><path class="fdk4kacmz"/></g>`,
		"fallback": "andrsrxn:grid-vertical",
	});
}

export default Component;
