import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/abd6-6kdg.css';
import '../../css/t/t8fn6eb9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="abd6-6kdg"/><path class="t8fn6eb9q"/></g>`,
		"fallback": "bi:hdd",
	});
}

export default Component;
