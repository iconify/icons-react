import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_9pgz92i.css';
import '../../css/t/t-kg0f6ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y_9pgz92i"/><path class="t-kg0f6ji"/></g>`,
		"fallback": "hugeicons:corner-up-left",
	});
}

export default Component;
