import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3ea6gw5u.css';
import '../../css/k/ktgflrbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n3ea6gw5u"/><path class="ktgflrbui"/></g>`,
		"fallback": "coolicons:credit-card-bulk-round",
	});
}

export default Component;
