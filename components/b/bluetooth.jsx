import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqme6yszl.css';
import '../../css/e/etfdx2b5v.css';
import '../../css/t/t03slpbnc.css';
import '../../css/o/ont0a4b_g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lqme6yszl"/><path clip-rule="evenodd" class="etfdx2b5v"/><path class="t03slpbnc"/><path class="ont0a4b_g"/></g>`,
		"fallback": "pepicons-pencil:bluetooth",
	});
}

export default Component;
