import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p0ws87b0q.css';
import '../../css/e/e7ugy10kt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p0ws87b0q"/><path class="e7ugy10kt"/></g>`,
		"fallback": "hugeicons:calendar-days",
	});
}

export default Component;
