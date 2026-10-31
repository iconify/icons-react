import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ogvb6-pyy.css';
import '../../css/y/y4tx-xbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ogvb6-pyy"/><path class="y4tx-xbdi"/></g>`,
		"fallback": "coolicons:heading-5-bulk-round",
	});
}

export default Component;
