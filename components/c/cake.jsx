import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ig2fy1bhu.css';
import '../../css/j/j0gd-ogjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ig2fy1bhu"/><path class="j0gd-ogjz"/></g>`,
		"fallback": "mynaui:cake",
	});
}

export default Component;
