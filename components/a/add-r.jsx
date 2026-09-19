import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1feoibrn.css';
import '../../css/d/dwkchcbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v1feoibrn"/><path clip-rule="evenodd" class="dwkchcbhv"/></g>`,
		"fallback": "gg:add-r",
	});
}

export default Component;
