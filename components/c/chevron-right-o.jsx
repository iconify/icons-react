import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yx-4-wm9p.css';
import '../../css/x/xkvbw3d5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yx-4-wm9p"/><path clip-rule="evenodd" class="xkvbw3d5o"/></g>`,
		"fallback": "gg:chevron-right-o",
	});
}

export default Component;
