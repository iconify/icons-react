import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epk7eh7oj.css';
import '../../css/x/x8fdx9bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epk7eh7oj"/><path class="x8fdx9bhn"/></g>`,
		"fallback": "coolicons:incognito-bulk-round",
	});
}

export default Component;
