import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/ubtpnjbkq.css';
import '../../css/y/ypkkr4wum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ubtpnjbkq"/><path class="ypkkr4wum"/></g>`,
		"fallback": "hugeicons:cursor-progress-03",
	});
}

export default Component;
