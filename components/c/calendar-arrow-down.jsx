import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6x0tibgh.css';
import '../../css/y/yb0pd8rdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w6x0tibgh"/><path class="yb0pd8rdm"/></g>`,
		"fallback": "mynaui:calendar-arrow-down",
	});
}

export default Component;
