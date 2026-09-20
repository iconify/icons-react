import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hvgscv1ov.css';
import '../../css/c/ckt_zoo7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hvgscv1ov"/><path class="ckt_zoo7v"/></g>`,
		"fallback": "reicon:bookmark-duotone",
	});
}

export default Component;
