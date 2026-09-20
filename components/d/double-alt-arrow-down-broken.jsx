import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t1tvwhbhe.css';
import '../../css/q/qru4p6brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t1tvwhbhe"/><path class="qru4p6brf"/></g>`,
		"fallback": "solar:double-alt-arrow-down-broken",
	});
}

export default Component;
