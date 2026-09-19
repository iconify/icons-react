import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qeq6pjb1d.css';
import '../../css/d/dlbo81bhs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qeq6pjb1d"/><path class="dlbo81bhs"/></g>`,
		"fallback": "at-icons:backpack",
	});
}

export default Component;
