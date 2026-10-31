import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqzu4hbrw.css';
import '../../css/w/w1hu9xwid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wqzu4hbrw"/><path class="w1hu9xwid"/></g>`,
		"fallback": "coolicons:behance-bulk-round",
	});
}

export default Component;
