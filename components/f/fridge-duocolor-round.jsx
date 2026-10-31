import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wui7iacqj.css';
import '../../css/l/l6fn63b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wui7iacqj"/><path class="l6fn63b_q"/></g>`,
		"fallback": "coolicons:fridge-duocolor-round",
	});
}

export default Component;
