import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slcc5xbme.css';
import '../../css/w/wt3eodyvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="slcc5xbme"/><path class="wt3eodyvz"/></g>`,
		"fallback": "coolicons:hand-bulk-round",
	});
}

export default Component;
