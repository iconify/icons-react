import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smwvebc9n.css';
import '../../css/y/yh1s5cbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary smwvebc9n"/><path class="primary yh1s5cbeb"/></g>`,
		"fallback": "iconaut:angle-duotone",
	});
}

export default Component;
