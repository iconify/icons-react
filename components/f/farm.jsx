import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9f0d-bwi.css';
import '../../css/q/q_ve7-jkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w9f0d-bwi"/><path class="q_ve7-jkc"/></g>`,
		"fallback": "andrsrxn:farm",
	});
}

export default Component;
