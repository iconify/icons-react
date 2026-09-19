import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j7m1pd7ds.css';
import '../../css/y/yrp63i6vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j7m1pd7ds"/><path class="yrp63i6vs"/></g>`,
		"fallback": "hugeicons:grape",
	});
}

export default Component;
