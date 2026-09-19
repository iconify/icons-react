import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/an_j7wb5z.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/x/x4s5dzbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="an_j7wb5z"/><path class="mqtixbwqo"/><path class="x4s5dzbex"/></g>`,
		"fallback": "hugeicons:bitcoin-credit-card",
	});
}

export default Component;
