import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aehq_ib-l.css';
import '../../css/w/wrkro4czb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aehq_ib-l"/><path class="wrkro4czb"/></g>`,
		"fallback": "reicon:inbox-filled",
	});
}

export default Component;
