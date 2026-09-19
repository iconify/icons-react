import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ytrqrsb9p.css';
import '../../css/y/yuf-ybcao.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ytrqrsb9p"/><path class="yuf-ybcao"/></g>`,
		"fallback": "bi:backpack3-fill",
	});
}

export default Component;
