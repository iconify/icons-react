import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lontg97es.css';
import '../../css/b/b5yp74bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lontg97es"/><path class="b5yp74bds"/></g>`,
		"fallback": "reicon:calendar2-duotone",
	});
}

export default Component;
