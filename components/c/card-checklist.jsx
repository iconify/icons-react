import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xoaxl7bum.css';
import '../../css/z/zaqju3b9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xoaxl7bum"/><path class="zaqju3b9q"/></g>`,
		"fallback": "bi:card-checklist",
	});
}

export default Component;
