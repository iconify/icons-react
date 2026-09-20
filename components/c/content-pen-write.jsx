import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hl0ntnzlb.css';
import '../../css/m/ml7_r2b-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hl0ntnzlb"/><path class="ml7_r2b-p"/></g>`,
		"fallback": "streamline-ultimate:content-pen-write",
	});
}

export default Component;
