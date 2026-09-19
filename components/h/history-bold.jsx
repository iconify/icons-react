import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/h/h5agcw4yc.css';
import '../../css/v/v26v1bc-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="h5agcw4yc"/><path class="v26v1bc-b"/></g>`,
		"fallback": "iconamoon:history-bold",
	});
}

export default Component;
