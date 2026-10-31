import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sa5p77ufe.css';
import '../../css/y/y4tx-xbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sa5p77ufe"/><path class="y4tx-xbdi"/></g>`,
		"fallback": "coolicons:heading-4-bulk-round",
	});
}

export default Component;
