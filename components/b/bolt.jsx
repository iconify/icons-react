import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4ajtdfwy.css';
import '../../css/k/khff3selz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q4ajtdfwy"/><path class="khff3selz"/></g>`,
		"fallback": "hugeicons:bolt",
	});
}

export default Component;
