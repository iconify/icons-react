import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/vgnv5k5we.css';
import '../../css/e/e2iqnjbvb.css';
import '../../css/l/ljsqevtjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="vgnv5k5we"/><path class="e2iqnjbvb"/></g><path class="ljsqevtjm"/></g>`,
		"fallback": "solar:figma-bold-duotone",
	});
}

export default Component;
