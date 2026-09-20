import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt1553bbb.css';
import '../../css/i/iua5r4byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mt1553bbb"/><path class="iua5r4byv"/>`,
		"fallback": "mingcute:camera-2-off-fill",
	});
}

export default Component;
