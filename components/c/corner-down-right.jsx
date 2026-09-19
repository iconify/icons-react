import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4bo6c_zp.css';
import '../../css/l/lop49sygl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o4bo6c_zp"/><path class="lop49sygl"/></g>`,
		"fallback": "hugeicons:corner-down-right",
	});
}

export default Component;
