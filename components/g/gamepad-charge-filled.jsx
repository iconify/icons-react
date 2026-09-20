import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u79t7o85y.css';
import '../../css/b/bve08d7_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u79t7o85y"/><path clip-rule="evenodd" class="bve08d7_e"/></g>`,
		"fallback": "reicon:gamepad-charge-filled",
	});
}

export default Component;
