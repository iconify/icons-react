import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nh-ps30pw.css';
import '../../css/t/thr17ibry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nh-ps30pw"/><path class="thr17ibry"/></g>`,
		"fallback": "hugeicons:chart-minimum",
	});
}

export default Component;
