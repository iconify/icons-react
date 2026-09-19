import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_evy9pfn.css';
import '../../css/e/e0sqh9n-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_evy9pfn"/><path clip-rule="evenodd" class="e0sqh9n-g"/></g>`,
		"fallback": "heroicons:bell-alert-20-solid",
	});
}

export default Component;
