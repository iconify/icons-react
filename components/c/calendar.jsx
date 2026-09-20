import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j6i8f4bys.css';
import '../../css/j/jj037z9yi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j6i8f4bys"/><path class="jj037z9yi"/></g>`,
		"fallback": "rivet-icons:calendar",
	});
}

export default Component;
