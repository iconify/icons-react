import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bngfrmbxm.css';
import '../../css/r/ry8wnc89p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bngfrmbxm"/><path clip-rule="evenodd" class="ry8wnc89p"/></g>`,
		"fallback": "reicon:folder-up",
	});
}

export default Component;
