import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wn5-m526j.css';
import '../../css/a/aq6_srbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wn5-m526j"/><path clip-rule="evenodd" class="aq6_srbhx"/></g>`,
		"fallback": "solar:hiking-minimalistic-bold",
	});
}

export default Component;
