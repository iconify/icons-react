import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hj-q_bbkm.css';
import '../../css/v/v7xsnmm9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hj-q_bbkm"/><path class="v7xsnmm9z"/></g>`,
		"fallback": "hugeicons:book-01",
	});
}

export default Component;
