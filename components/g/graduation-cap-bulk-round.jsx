import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzuip1b5a.css';
import '../../css/d/djug5xpex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pzuip1b5a"/><path class="djug5xpex"/></g>`,
		"fallback": "coolicons:graduation-cap-bulk-round",
	});
}

export default Component;
