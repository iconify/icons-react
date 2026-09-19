import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/r4i9ipb_b.css';
import '../../css/f/f5odzcbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="r4i9ipb_b"/><path class="f5odzcbwu"/></g>`,
		"fallback": "hugeicons:hot-price",
	});
}

export default Component;
