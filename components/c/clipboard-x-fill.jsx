import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mq3tvbcci.css';
import '../../css/j/jimkgtbzc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mq3tvbcci"/><path class="jimkgtbzc"/></g>`,
		"fallback": "bi:clipboard-x-fill",
	});
}

export default Component;
