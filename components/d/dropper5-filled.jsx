import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6u8vrbcf.css';
import '../../css/p/p4nti_bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t6u8vrbcf"/><path class="p4nti_bei"/></g>`,
		"fallback": "reicon:dropper5-filled",
	});
}

export default Component;
