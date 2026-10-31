import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/usmm7gb1q.css';
import '../../css/q/qv_0p_bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="usmm7gb1q"/><path class="qv_0p_bsu"/></g>`,
		"fallback": "withicons-retro:align-left",
	});
}

export default Component;
