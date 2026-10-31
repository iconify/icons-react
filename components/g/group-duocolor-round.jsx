import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bex7cvxal.css';
import '../../css/d/d8i74sbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bex7cvxal"/><path class="d8i74sbye"/></g>`,
		"fallback": "coolicons:group-duocolor-round",
	});
}

export default Component;
