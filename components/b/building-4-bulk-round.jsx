import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhbc_s6of.css';
import '../../css/b/btel8jwml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jhbc_s6of"/><path class="btel8jwml"/></g>`,
		"fallback": "coolicons:building-4-bulk-round",
	});
}

export default Component;
