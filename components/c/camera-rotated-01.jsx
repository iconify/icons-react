import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ty-ii6zcj.css';
import '../../css/u/u0t7-ybxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ty-ii6zcj"/><path class="u0t7-ybxr"/></g>`,
		"fallback": "hugeicons:camera-rotated-01",
	});
}

export default Component;
