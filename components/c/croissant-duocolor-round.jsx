import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k6au37bnk.css';
import '../../css/j/jlfq_5zsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k6au37bnk"/><path class="jlfq_5zsc"/></g>`,
		"fallback": "coolicons:croissant-duocolor-round",
	});
}

export default Component;
