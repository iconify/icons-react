import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xf1a6wbgm.css';
import '../../css/m/mgg26ff3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xf1a6wbgm"/><path clip-rule="evenodd" class="mgg26ff3u"/></g>`,
		"fallback": "healthicons:healthcare-it2x-outline",
	});
}

export default Component;
