import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3-yrlc8x.css';
import '../../css/o/oz-4kbawc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="y3-yrlc8x"/><path class="oz-4kbawc"/></g>`,
		"fallback": "cryptocurrency-color:data",
	});
}

export default Component;
