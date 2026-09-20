import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j98da8bnt.css';
import '../../css/o/ojay-mbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j98da8bnt"/><path clip-rule="evenodd" class="ojay-mbor"/></g>`,
		"fallback": "solar:call-medicine-bold-duotone",
	});
}

export default Component;
