import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gn80e5vjv.css';
import '../../css/o/ofygbeg8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gn80e5vjv"/><path class="ofygbeg8k"/></g>`,
		"fallback": "reicon:hourglass-duotone",
	});
}

export default Component;
