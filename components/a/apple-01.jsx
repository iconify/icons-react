import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/h6zfdhp0a.css';
import '../../css/q/qvi_y__xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="h6zfdhp0a"/><path class="qvi_y__xt"/></g>`,
		"fallback": "hugeicons:apple-01",
	});
}

export default Component;
