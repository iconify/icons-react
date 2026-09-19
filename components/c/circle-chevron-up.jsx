import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1_mtyflw.css';
import '../../css/c/cte7j3b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y1_mtyflw"/><path class="cte7j3b3d"/></g>`,
		"fallback": "hugeicons:circle-chevron-up",
	});
}

export default Component;
