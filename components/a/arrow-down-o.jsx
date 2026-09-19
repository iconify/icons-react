import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2wracbbn.css';
import '../../css/g/g5gr9sp4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d2wracbbn"/><path clip-rule="evenodd" class="g5gr9sp4c"/></g>`,
		"fallback": "gg:arrow-down-o",
	});
}

export default Component;
