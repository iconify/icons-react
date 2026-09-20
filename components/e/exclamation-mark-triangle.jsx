import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b3m1dxb1v.css';
import '../../css/a/aektm6bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b3m1dxb1v"/><path clip-rule="evenodd" class="aektm6bmm"/></g>`,
		"fallback": "nrk:exclamation-mark-triangle",
	});
}

export default Component;
