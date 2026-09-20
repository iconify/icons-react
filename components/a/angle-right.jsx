import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ypxup6b3j.css';
import '../../css/o/ov7upw0qn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ypxup6b3j"/><path class="ov7upw0qn"/></g>`,
		"fallback": "pepicons-pencil:angle-right",
	});
}

export default Component;
