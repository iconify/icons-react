import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r31ic-bpu.css';
import '../../css/y/yuqm4qbmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r31ic-bpu"/><path class="yuqm4qbmy"/></g>`,
		"fallback": "at-icons:fist",
	});
}

export default Component;
