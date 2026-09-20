import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aekvrpe8z.css';
import '../../css/f/fwk_2x_mx.css';
import '../../css/a/aw2dxzblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aekvrpe8z"/><path class="fwk_2x_mx"/><path class="aw2dxzblq"/></g>`,
		"fallback": "solar:diskette-bold-duotone",
	});
}

export default Component;
