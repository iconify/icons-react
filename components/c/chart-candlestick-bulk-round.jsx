import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hkbigu5ks.css';
import '../../css/t/te_1idb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hkbigu5ks"/><path class="te_1idb1x"/></g>`,
		"fallback": "coolicons:chart-candlestick-bulk-round",
	});
}

export default Component;
