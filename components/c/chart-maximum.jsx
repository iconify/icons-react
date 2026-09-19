import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nh-ps30pw.css';
import '../../css/b/bt6k7obsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nh-ps30pw"/><path class="bt6k7obsu"/></g>`,
		"fallback": "hugeicons:chart-maximum",
	});
}

export default Component;
