import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-z99rbkh.css';
import '../../css/k/krgy9n25b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-z99rbkh"/><path class="krgy9n25b"/></g>`,
		"fallback": "reicon:home3-duotone",
	});
}

export default Component;
