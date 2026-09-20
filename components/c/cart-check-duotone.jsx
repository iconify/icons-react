import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h7y3db64d.css';
import '../../css/h/h91qapbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h7y3db64d"/><path class="h91qapbkc"/></g>`,
		"fallback": "reicon:cart-check-duotone",
	});
}

export default Component;
