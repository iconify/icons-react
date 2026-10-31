import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki6vkl7df.css';
import '../../css/b/brht7lb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ki6vkl7df"/><path class="brht7lb0a"/></g>`,
		"fallback": "coolicons:accessibility-alt-bulk-round",
	});
}

export default Component;
