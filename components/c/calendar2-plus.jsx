import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1e4swiah.css';
import '../../css/s/s0pwfupjb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b1e4swiah"/><path class="s0pwfupjb"/></g>`,
		"fallback": "bi:calendar2-plus",
	});
}

export default Component;
