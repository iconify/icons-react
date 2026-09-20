import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jj9dgh_2r.css';
import '../../css/t/t4f9bbbal.css';
import '../../css/p/p87szkrwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jj9dgh_2r"/><path class="t4f9bbbal"/><path clip-rule="evenodd" class="p87szkrwr"/></g>`,
		"fallback": "reicon:hand-money-duotone",
	});
}

export default Component;
