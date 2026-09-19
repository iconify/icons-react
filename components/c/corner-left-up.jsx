import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zj8pbgbmd.css';
import '../../css/m/mbpykcc7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zj8pbgbmd"/><path class="mbpykcc7s"/></g>`,
		"fallback": "hugeicons:corner-left-up",
	});
}

export default Component;
