import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0tc4jblz.css';
import '../../css/c/cyyawmufk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0tc4jblz"/><path clip-rule="evenodd" class="cyyawmufk"/></g>`,
		"fallback": "majesticons:analytics-restricted",
	});
}

export default Component;
