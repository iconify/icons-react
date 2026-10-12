import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/whz8z23bj.css';
import '../../css/j/jszql2b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="whz8z23bj"/><path class="jszql2b_k"/></g>`,
		"fallback": "andrsrxn:arrow-u-up",
	});
}

export default Component;
