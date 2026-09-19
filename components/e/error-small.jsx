import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tech45blh.css';
import '../../css/y/yf49wkb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tech45blh"/><path clip-rule="evenodd" class="yf49wkb5l"/></g>`,
		"fallback": "codicon:error-small",
	});
}

export default Component;
