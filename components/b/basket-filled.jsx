import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gt8ag5ylm.css';
import '../../css/f/fa2gjvz-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gt8ag5ylm"/><path clip-rule="evenodd" class="fa2gjvz-c"/></g>`,
		"fallback": "reicon:basket-filled",
	});
}

export default Component;
