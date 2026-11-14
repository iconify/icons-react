import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c9waqkqud.css';
import '../../css/o/o-6k6bcav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="c9waqkqud"/><path class="o-6k6bcav"/></g>`,
		"fallback": "hugeicons:comment-01",
	});
}

export default Component;
