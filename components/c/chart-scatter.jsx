import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d1w58s-kb.css';
import '../../css/n/nh-ps30pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d1w58s-kb"/><path class="nh-ps30pw"/></g>`,
		"fallback": "hugeicons:chart-scatter",
	});
}

export default Component;
