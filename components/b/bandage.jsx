import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vusvbkbzl.css';
import '../../css/w/w0vfi_bgw.css';
import '../../css/z/zrlh-6b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vusvbkbzl"/><path class="w0vfi_bgw"/><path class="zrlh-6b7n"/></g>`,
		"fallback": "iconaut:bandage",
	});
}

export default Component;
