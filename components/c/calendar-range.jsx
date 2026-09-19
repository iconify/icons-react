import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oowzbqtcx.css';
import '../../css/t/t8xn--euq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oowzbqtcx"/><path class="t8xn--euq"/></g>`,
		"fallback": "bi:calendar-range",
	});
}

export default Component;
