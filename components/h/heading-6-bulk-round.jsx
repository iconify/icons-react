import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g5xb99jis.css';
import '../../css/y/y4tx-xbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g5xb99jis"/><path class="y4tx-xbdi"/></g>`,
		"fallback": "coolicons:heading-6-bulk-round",
	});
}

export default Component;
