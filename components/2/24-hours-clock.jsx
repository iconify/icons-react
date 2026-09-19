import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xk9gzvbkh.css';
import '../../css/w/wszxm99cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xk9gzvbkh"/><path class="wszxm99cb"/></g>`,
		"fallback": "hugeicons:24-hours-clock",
	});
}

export default Component;
