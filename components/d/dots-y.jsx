import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fw6gbvy6t.css';
import '../../css/n/n8avr-m9v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fw6gbvy6t"/><path class="n8avr-m9v"/></g>`,
		"fallback": "pepicons-print:dots-y",
	});
}

export default Component;
