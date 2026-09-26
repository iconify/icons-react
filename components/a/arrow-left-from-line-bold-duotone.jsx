import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kkx-iibdw.css';
import '../../css/o/o-0ip1jle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kkx-iibdw"/><path class="o-0ip1jle"/></g>`,
		"fallback": "solar:arrow-left-from-line-bold-duotone",
	});
}

export default Component;
