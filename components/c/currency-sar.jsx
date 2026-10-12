import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6jjfugir.css';
import '../../css/v/v5udq_bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y6jjfugir"/><path class="v5udq_bvj"/></g>`,
		"fallback": "andrsrxn:currency-sar",
	});
}

export default Component;
