import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojay-mbor.css';
import '../../css/p/p09d0ab_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ojay-mbor"/><path class="p09d0ab_n"/></g>`,
		"fallback": "solar:call-medicine-rounded-bold-duotone",
	});
}

export default Component;
