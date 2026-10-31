import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tss7snbwa.css';
import '../../css/s/sc-ep82on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tss7snbwa"/><path class="sc-ep82on"/></g>`,
		"fallback": "coolicons:dumbbell-bulk-round",
	});
}

export default Component;
