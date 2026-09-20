import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/azd92jbic.css';
import '../../css/d/dk8x91bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="azd92jbic"/><path class="dk8x91bdc"/></g>`,
		"fallback": "solar:arrow-left-up-bold-duotone",
	});
}

export default Component;
