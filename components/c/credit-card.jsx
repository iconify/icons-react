import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd3h48bql.css';
import '../../css/o/ox2i85b0q.css';
import '../../css/v/ve208qbsr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hd3h48bql"/><path class="ox2i85b0q"/><path clip-rule="evenodd" class="ve208qbsr"/></g>`,
		"fallback": "pepicons:credit-card",
	});
}

export default Component;
