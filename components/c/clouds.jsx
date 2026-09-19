import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5n1ckbtr.css';
import '../../css/t/tnmirk3cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5n1ckbtr"/><path class="tnmirk3cd"/></g>`,
		"fallback": "griddy-icons:clouds",
	});
}

export default Component;
