import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qemn6n1fv.css';
import '../../css/x/x_90y3bpa.css';
import '../../css/j/jwj5s6brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qemn6n1fv"/><path class="x_90y3bpa"/><path class="jwj5s6brs"/></g>`,
		"fallback": "solar:danger-triangle-bold-duotone",
	});
}

export default Component;
