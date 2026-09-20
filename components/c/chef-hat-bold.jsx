import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5h2imbai.css';
import '../../css/r/rh17-5hfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5h2imbai"/><path class="rh17-5hfi"/></g>`,
		"fallback": "solar:chef-hat-bold",
	});
}

export default Component;
