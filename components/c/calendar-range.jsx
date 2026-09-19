import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s47otfb_x.css';
import '../../css/e/e7ugy10kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s47otfb_x"/><path class="e7ugy10kt"/></g>`,
		"fallback": "hugeicons:calendar-range",
	});
}

export default Component;
