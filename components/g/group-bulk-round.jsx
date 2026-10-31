import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjb8kxr-y.css';
import '../../css/r/rf0verbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kjb8kxr-y"/><path class="rf0verbnp"/></g>`,
		"fallback": "coolicons:group-bulk-round",
	});
}

export default Component;
