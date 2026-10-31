import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2d1g3i1b.css';
import '../../css/o/o516xlv3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2d1g3i1b"/><path class="o516xlv3h"/></g>`,
		"fallback": "coolicons:indent-bulk-round",
	});
}

export default Component;
