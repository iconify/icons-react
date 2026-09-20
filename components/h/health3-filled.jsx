import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yk3bi-bca.css';
import '../../css/v/vxrma_brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yk3bi-bca"/><path class="vxrma_brd"/></g>`,
		"fallback": "reicon:health3-filled",
	});
}

export default Component;
