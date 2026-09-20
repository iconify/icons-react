import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/udy0j322q.css';
import '../../css/x/xo6vxactm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="udy0j322q"/><path class="xo6vxactm"/></g>`,
		"fallback": "reicon:ac-filled",
	});
}

export default Component;
