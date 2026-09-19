import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e3kp9xbgx.css';
import '../../css/j/jp879rb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e3kp9xbgx"/><path class="jp879rb9j"/></g>`,
		"fallback": "hugeicons:deepseek",
	});
}

export default Component;
