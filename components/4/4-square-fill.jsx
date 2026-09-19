import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4n79d9_t.css';
import '../../css/e/eu22-3b2a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a4n79d9_t"/><path class="eu22-3b2a"/></g>`,
		"fallback": "bi:4-square-fill",
	});
}

export default Component;
