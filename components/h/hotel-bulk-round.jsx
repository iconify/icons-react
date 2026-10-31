import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uuittcc3u.css';
import '../../css/t/t5vn0dbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uuittcc3u"/><path class="t5vn0dbxu"/></g>`,
		"fallback": "coolicons:hotel-bulk-round",
	});
}

export default Component;
