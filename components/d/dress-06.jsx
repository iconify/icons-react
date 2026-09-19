import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r1-6m6bmt.css';
import '../../css/j/jsrth9b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r1-6m6bmt"/><path class="jsrth9b3c"/></g>`,
		"fallback": "hugeicons:dress-06",
	});
}

export default Component;
