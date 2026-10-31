import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ruxnuf11w.css';
import '../../css/v/vaoqwsymw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ruxnuf11w"/><path class="vaoqwsymw"/></g>`,
		"fallback": "coolicons:currency-solana-bulk-round",
	});
}

export default Component;
