import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x5l1-sfby.css';
import '../../css/u/uhxj31ilb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x5l1-sfby"/><path class="uhxj31ilb"/></g>`,
		"fallback": "healthicons:girl-1015y",
	});
}

export default Component;
