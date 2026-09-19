import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ueaslerkc.css';
import '../../css/w/wj45x692u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ueaslerkc"/><path class="wj45x692u"/></g>`,
		"fallback": "bi:credit-card",
	});
}

export default Component;
