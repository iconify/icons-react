import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yy7a_jbhx.css';
import '../../css/j/j2onbccwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yy7a_jbhx"/><path clip-rule="evenodd" class="j2onbccwl"/></g>`,
		"fallback": "healthicons:calendar-quarantine",
	});
}

export default Component;
