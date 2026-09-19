import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4bf14bkq.css';
import '../../css/t/t5luc1mev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q4bf14bkq"/><path class="t5luc1mev"/></g>`,
		"fallback": "hugeicons:ai-brain-03",
	});
}

export default Component;
