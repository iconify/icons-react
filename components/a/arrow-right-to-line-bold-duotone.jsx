import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfdu_x60v.css';
import '../../css/l/lozrgxbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vfdu_x60v"/><path class="lozrgxbcz"/></g>`,
		"fallback": "solar:arrow-right-to-line-bold-duotone",
	});
}

export default Component;
