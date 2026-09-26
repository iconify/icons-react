import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eujms49ac.css';
import '../../css/u/uq-kwfbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eujms49ac"/><path class="uq-kwfbsc"/></g>`,
		"fallback": "solar:arrow-right-from-line-bold-duotone",
	});
}

export default Component;
