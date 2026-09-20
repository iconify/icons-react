import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hinaxjb7n.css';
import '../../css/w/wulp27b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hinaxjb7n"/><path class="wulp27b2r"/></g>`,
		"fallback": "reicon:circle-transfer-v-duotone",
	});
}

export default Component;
