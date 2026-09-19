import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3t9h-4dz.css';
import '../../css/u/uej42obwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w3t9h-4dz"/><path class="uej42obwe"/></g>`,
		"fallback": "hugeicons:home-07",
	});
}

export default Component;
