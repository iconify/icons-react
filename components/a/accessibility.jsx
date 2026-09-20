import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqz26gocz.css';
import '../../css/d/dofa29bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rqz26gocz"/><path clip-rule="evenodd" class="dofa29bge"/></g>`,
		"fallback": "nrk:accessibility",
	});
}

export default Component;
