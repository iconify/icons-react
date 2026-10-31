import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vqyt1wbnn.css';
import '../../css/r/r9jpr6bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vqyt1wbnn"/><path class="r9jpr6bhg"/></g>`,
		"fallback": "coolicons:file-check-bulk-round",
	});
}

export default Component;
