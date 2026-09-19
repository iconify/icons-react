import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eypl85bpr.css';
import '../../css/i/itek6q5-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eypl85bpr"/><path class="itek6q5-v"/></g>`,
		"fallback": "hugeicons:clipboard-minus",
	});
}

export default Component;
