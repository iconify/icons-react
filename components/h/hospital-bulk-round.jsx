import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uuittcc3u.css';
import '../../css/h/h9--ptifm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uuittcc3u"/><path class="h9--ptifm"/></g>`,
		"fallback": "coolicons:hospital-bulk-round",
	});
}

export default Component;
