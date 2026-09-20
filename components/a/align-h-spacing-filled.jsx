import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lfdvzxf3s.css';
import '../../css/u/u06yh1bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lfdvzxf3s"/><path class="u06yh1bhh"/></g>`,
		"fallback": "reicon:align-h-spacing-filled",
	});
}

export default Component;
