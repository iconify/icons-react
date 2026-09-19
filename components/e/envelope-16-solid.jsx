import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qesd3b3ue.css';
import '../../css/o/o6mkiebpl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qesd3b3ue"/><path class="o6mkiebpl"/></g>`,
		"fallback": "heroicons:envelope-16-solid",
	});
}

export default Component;
