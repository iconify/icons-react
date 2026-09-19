import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q1m15dbht.css';
import '../../css/n/n4qvf-vuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="q1m15dbht"/><path class="n4qvf-vuc"/></g>`,
		"fallback": "hugeicons:dna",
	});
}

export default Component;
