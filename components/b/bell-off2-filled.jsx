import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v3jyh5xrn.css';
import '../../css/x/xks-nzbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v3jyh5xrn"/><path class="xks-nzbbr"/></g>`,
		"fallback": "reicon:bell-off2-filled",
	});
}

export default Component;
