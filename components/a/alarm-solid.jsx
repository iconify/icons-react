import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wcaxpabce.css';
import '../../css/u/uowcfd4jh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wcaxpabce"/><path class="uowcfd4jh"/></g>`,
		"fallback": "rivet-icons:alarm-solid",
	});
}

export default Component;
