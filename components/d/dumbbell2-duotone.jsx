import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6d9j7bfn.css';
import '../../css/t/ti76g3bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k6d9j7bfn"/><path class="ti76g3bns"/></g>`,
		"fallback": "reicon:dumbbell2-duotone",
	});
}

export default Component;
