import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ct4emob8s.css';
import '../../css/u/u0t7-ybxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ct4emob8s"/><path class="u0t7-ybxr"/></g>`,
		"fallback": "hugeicons:camera-rotated-01",
	});
}

export default Component;
