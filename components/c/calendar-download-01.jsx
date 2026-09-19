import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0l7_4b9y.css';
import '../../css/e/e7n46g91q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q0l7_4b9y"/><path class="e7n46g91q"/></g>`,
		"fallback": "hugeicons:calendar-download-01",
	});
}

export default Component;
