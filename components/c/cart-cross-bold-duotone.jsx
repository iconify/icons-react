import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihi5mdelv.css';
import '../../css/i/iva9usw6m.css';
import '../../css/v/v1mxnhbir.css';
import '../../css/t/t0v0bebny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ihi5mdelv"/><path class="iva9usw6m"/><path class="v1mxnhbir"/><path class="t0v0bebny"/></g>`,
		"fallback": "solar:cart-cross-bold-duotone",
	});
}

export default Component;
