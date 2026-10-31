import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uub5b9-9u.css';
import '../../css/i/i1vt_qbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uub5b9-9u"/><path class="i1vt_qbof"/></g>`,
		"fallback": "coolicons:currency-bitcoin-bulk-round",
	});
}

export default Component;
