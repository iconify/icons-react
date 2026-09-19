import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddc6_swix.css';
import '../../css/k/kirb73bqe.css';
import '../../css/w/w966n2bvb.css';
import '../../css/v/vp612abwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ddc6_swix"/><path class="kirb73bqe"/><path class="w966n2bvb"/><path class="vp612abwj"/></g>`,
		"fallback": "hugeicons:horse-saddle",
	});
}

export default Component;
