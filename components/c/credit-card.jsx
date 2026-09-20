import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxstb9b1h.css';
import '../../css/w/wh2k3y_4b.css';
import '../../css/c/cn6m43jim.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pxstb9b1h"/><path clip-rule="evenodd" class="wh2k3y_4b"/><path clip-rule="evenodd" class="cn6m43jim"/></g>`,
		"fallback": "pepicons-print:credit-card",
	});
}

export default Component;
