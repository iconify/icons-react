import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8-azqsqv.css';
import '../../css/r/rjf10t-9f.css';
import '../../css/z/zy8fcvbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q8-azqsqv"/><path class="rjf10t-9f"/><path clip-rule="evenodd" class="zy8fcvbqf"/></g>`,
		"fallback": "solar:dropper-3-outline",
	});
}

export default Component;
