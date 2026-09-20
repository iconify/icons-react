import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k4c4y92dv.css';
import '../../css/d/dgl7atcnj.css';
import '../../css/o/ovhuo0v0s.css';
import '../../css/y/y7rsp_bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k4c4y92dv"/><path class="dgl7atcnj"/><path class="ovhuo0v0s"/><path class="y7rsp_bwg"/></g>`,
		"fallback": "solar:book-bookmark-bold-duotone",
	});
}

export default Component;
