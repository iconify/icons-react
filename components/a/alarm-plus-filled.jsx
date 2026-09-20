import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmwua6i5x.css';
import '../../css/w/wlb_jwm4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zmwua6i5x"/><path class="wlb_jwm4s"/></g>`,
		"fallback": "tabler:alarm-plus-filled",
	});
}

export default Component;
