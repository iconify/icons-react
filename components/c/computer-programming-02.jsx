import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vx-w8x1vz.css';
import '../../css/y/y0iq8qwff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vx-w8x1vz"/><path class="y0iq8qwff"/></g>`,
		"fallback": "hugeicons:computer-programming-02",
	});
}

export default Component;
