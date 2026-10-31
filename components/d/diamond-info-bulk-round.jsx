import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bz2wx0ban.css';
import '../../css/k/k2kjdac-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bz2wx0ban"/><path class="k2kjdac-x"/></g>`,
		"fallback": "coolicons:diamond-info-bulk-round",
	});
}

export default Component;
