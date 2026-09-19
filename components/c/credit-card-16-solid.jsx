import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/syhdgl5vr.css';
import '../../css/y/yytflzz-h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="syhdgl5vr"/><path clip-rule="evenodd" class="yytflzz-h"/></g>`,
		"fallback": "heroicons:credit-card-16-solid",
	});
}

export default Component;
