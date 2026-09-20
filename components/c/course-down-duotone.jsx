import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-c6237aq.css';
import '../../css/f/fltcmj1yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j-c6237aq"/><path class="fltcmj1yz"/></g>`,
		"fallback": "reicon:course-down-duotone",
	});
}

export default Component;
