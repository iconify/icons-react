import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xz1rlxbpz.css';
import '../../css/h/h03p2vbds.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xz1rlxbpz"/><path clip-rule="evenodd" class="h03p2vbds"/></g>`,
		"fallback": "streamline-color:expand-flat",
	});
}

export default Component;
