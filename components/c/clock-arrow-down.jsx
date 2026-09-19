import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zaz_2h_jd.css';
import '../../css/w/w4x4tnb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zaz_2h_jd"/><path class="w4x4tnb7k"/></g>`,
		"fallback": "hugeicons:clock-arrow-down",
	});
}

export default Component;
