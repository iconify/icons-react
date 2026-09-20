import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5-0-5bhi.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vxkwoh7gu.css';
import '../../css/o/o9x_0w9gx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5-0-5bhi"/><g class="jn8qy4bru"><path class="vxkwoh7gu"/><path class="o9x_0w9gx"/></g>`,
		"fallback": "openmoji:back-arrow",
	});
}

export default Component;
