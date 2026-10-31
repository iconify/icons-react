import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq1n5ycwa.css';
import '../../css/a/andt5oz3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dq1n5ycwa"/><path class="andt5oz3w"/></g>`,
		"fallback": "coolicons:chart-pyramid-duotone-round",
	});
}

export default Component;
