import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-fd9yrls.css';
import '../../css/c/cxat4wbzw.css';
import '../../css/y/y5hl0bc-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x-fd9yrls"/><path clip-rule="evenodd" class="cxat4wbzw"/><path class="y5hl0bc-e"/></g>`,
		"fallback": "healthicons:blood-ab-p-outline-24px",
	});
}

export default Component;
