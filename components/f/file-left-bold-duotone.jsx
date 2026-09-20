import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18j-rbjv.css';
import '../../css/g/gi3pn5t0u.css';
import '../../css/q/qx5gmfj5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18j-rbjv"/><path class="gi3pn5t0u"/><path class="qx5gmfj5q"/></g>`,
		"fallback": "solar:file-left-bold-duotone",
	});
}

export default Component;
