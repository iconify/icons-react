import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnhc45b_k.css';
import '../../css/z/zwr3cxbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vnhc45b_k"/><path clip-rule="evenodd" class="zwr3cxbkt"/></g>`,
		"fallback": "majesticons:earth-sphere",
	});
}

export default Component;
