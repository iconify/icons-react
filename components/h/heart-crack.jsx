import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sb-vcjbkh.css';
import '../../css/i/ia50o0jxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sb-vcjbkh"/><path class="ia50o0jxu"/></g>`,
		"fallback": "hugeicons:heart-crack",
	});
}

export default Component;
