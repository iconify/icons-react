import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g32g42_-b.css';
import '../../css/c/cal120bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g32g42_-b"/><path class="cal120bak"/></g>`,
		"fallback": "hugeicons:calendar-check",
	});
}

export default Component;
