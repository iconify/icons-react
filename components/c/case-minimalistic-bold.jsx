import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qzebeqb0i.css';
import '../../css/i/it_67xy-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qzebeqb0i"/><path clip-rule="evenodd" class="it_67xy-g"/></g>`,
		"fallback": "solar:case-minimalistic-bold",
	});
}

export default Component;
