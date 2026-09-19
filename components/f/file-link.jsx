import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxacx-b_k.css';
import '../../css/r/rhr_3abbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yxacx-b_k"/><path class="rhr_3abbq"/></g>`,
		"fallback": "hugeicons:file-link",
	});
}

export default Component;
