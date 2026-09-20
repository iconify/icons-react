import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7i3yvf1s.css';
import '../../css/h/hd-x4gbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o7i3yvf1s"/><path class="hd-x4gbpe"/></g>`,
		"fallback": "mi:clipboard-list",
	});
}

export default Component;
