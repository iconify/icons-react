import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxr8whbej.css';
import '../../css/d/d_0-fe4cw.css';
import '../../css/u/usqq9cbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sxr8whbej"/><path class="d_0-fe4cw"/><path class="usqq9cbfw"/></g>`,
		"fallback": "lets-icons:book-fill",
	});
}

export default Component;
