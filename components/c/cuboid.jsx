import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyha0rbrj.css';
import '../../css/e/eyyp1tx8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xyha0rbrj"/><path class="eyyp1tx8b"/></g>`,
		"fallback": "andrsrxn:cuboid",
	});
}

export default Component;
