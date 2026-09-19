import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sc5634b_z.css';
import '../../css/v/vti1t7j4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sc5634b_z"/><path class="vti1t7j4x"/></g>`,
		"fallback": "hugeicons:developer",
	});
}

export default Component;
