import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz3jffbbq.css';
import '../../css/h/hywcwmb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zz3jffbbq"/><path class="hywcwmb5h"/></g>`,
		"fallback": "coolicons:coupon-bulk-round",
	});
}

export default Component;
