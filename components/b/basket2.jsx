import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kosb2ablp.css';
import '../../css/m/m2t6lxdyh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kosb2ablp"/><path class="m2t6lxdyh"/></g>`,
		"fallback": "bi:basket2",
	});
}

export default Component;
