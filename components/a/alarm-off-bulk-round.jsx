import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-wwl8b5v.css';
import '../../css/z/z92kh9bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-wwl8b5v"/><path class="z92kh9bgt"/></g>`,
		"fallback": "coolicons:alarm-off-bulk-round",
	});
}

export default Component;
