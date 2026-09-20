import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-9ws6h3n.css';
import '../../css/q/qsxee1b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-9ws6h3n"/><path class="qsxee1b1q"/></g>`,
		"fallback": "mynaui:droplets-solid",
	});
}

export default Component;
