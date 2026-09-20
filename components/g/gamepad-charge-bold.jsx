import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/il5wbr13b.css';
import '../../css/d/dkb17ryis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="il5wbr13b"/><path clip-rule="evenodd" class="dkb17ryis"/></g>`,
		"fallback": "solar:gamepad-charge-bold",
	});
}

export default Component;
