import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kb6x86h-x.css';
import '../../css/c/cu8p--b0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kb6x86h-x"/><path class="cu8p--b0v"/></g>`,
		"fallback": "bi:credit-card-2-back",
	});
}

export default Component;
