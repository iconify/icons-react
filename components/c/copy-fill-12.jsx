import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj5kwvbra.css';
import '../../css/y/yaf0t5bmv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fj5kwvbra"/><rect class="yaf0t5bmv"/></g>`,
		"fallback": "garden:copy-fill-12",
	});
}

export default Component;
