import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gijzp_b8u.css';
import '../../css/h/hku4s8bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gijzp_b8u"/><path class="hku4s8bva"/></g>`,
		"fallback": "healthicons:i-training-class-outline-24px",
	});
}

export default Component;
