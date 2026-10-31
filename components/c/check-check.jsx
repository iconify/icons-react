import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qvigly9om.css';
import '../../css/x/xw-gfrkez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qvigly9om"/><path class="xw-gfrkez"/></g>`,
		"fallback": "withicons-retro:check-check",
	});
}

export default Component;
