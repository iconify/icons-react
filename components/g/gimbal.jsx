import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7fprqnja.css';
import '../../css/l/l4-r9kbpi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t7fprqnja"/><path class="l4-r9kbpi"/></g>`,
		"fallback": "at-icons:gimbal",
	});
}

export default Component;
