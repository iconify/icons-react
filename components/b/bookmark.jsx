import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ckt_zoo7v.css';
import '../../css/o/o5bestsff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ckt_zoo7v"/><path clip-rule="evenodd" class="o5bestsff"/></g>`,
		"fallback": "reicon:bookmark",
	});
}

export default Component;
