import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mlps8woqv.css';
import '../../css/m/m3bowjbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mlps8woqv"/><path class="m3bowjbuz"/></g>`,
		"fallback": "hugeicons:checkmark-circle-03",
	});
}

export default Component;
