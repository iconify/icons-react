import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7cj19b0u.css';
import '../../css/x/x3y6ph7ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g7cj19b0u"/><path class="x3y6ph7ke"/></g>`,
		"fallback": "coolicons:credit-card-check-corner-bulk-round",
	});
}

export default Component;
