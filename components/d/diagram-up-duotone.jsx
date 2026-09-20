import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rx1mjabyh.css';
import '../../css/u/uj6_d9bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rx1mjabyh"/><path class="uj6_d9bdi"/></g>`,
		"fallback": "reicon:diagram-up-duotone",
	});
}

export default Component;
