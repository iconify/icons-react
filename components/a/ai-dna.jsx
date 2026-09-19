import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l8pen_c_d.css';
import '../../css/x/xfnkbmbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l8pen_c_d"/><path class="xfnkbmbfp"/></g>`,
		"fallback": "hugeicons:ai-dna",
	});
}

export default Component;
