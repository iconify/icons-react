import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dum8-7_9t.css';
import '../../css/y/yl1hy8btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dum8-7_9t"/><path clip-rule="evenodd" class="yl1hy8btc"/></g>`,
		"fallback": "reicon:cloud-upload-filled",
	});
}

export default Component;
