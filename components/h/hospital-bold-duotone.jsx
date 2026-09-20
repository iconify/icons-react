import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ytv8xebll.css';
import '../../css/r/rdt5v8b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ytv8xebll"/><path class="rdt5v8b4o"/></g>`,
		"fallback": "solar:hospital-bold-duotone",
	});
}

export default Component;
