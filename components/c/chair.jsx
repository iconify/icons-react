import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtjqgikuz.css';
import '../../css/u/ucr2d2bvz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtjqgikuz"/><path class="ucr2d2bvz"/></g>`,
		"fallback": "streamline-color:chair",
	});
}

export default Component;
