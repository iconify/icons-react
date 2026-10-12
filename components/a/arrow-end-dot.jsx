import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y0rh3zbcy.css';
import '../../css/o/o_ilagbnl.css';
import '../../css/f/f43-ymbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y0rh3zbcy"/><path class="o_ilagbnl"/><path class="f43-ymbwb"/></g>`,
		"fallback": "andrsrxn:arrow-end-dot",
	});
}

export default Component;
