import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lgvsbdbea.css';
import '../../css/k/k1dc_j0wb.css';
import '../../css/y/yw-1u0bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lgvsbdbea"/><path class="k1dc_j0wb"/><path class="yw-1u0bgb"/></g>`,
		"fallback": "hugeicons:ai-brain-04",
	});
}

export default Component;
