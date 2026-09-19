import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qx8fcd5nb.css';
import '../../css/i/ilelembxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qx8fcd5nb"/><path class="ilelembxw"/></g>`,
		"fallback": "hugeicons:calendar-lock-01",
	});
}

export default Component;
