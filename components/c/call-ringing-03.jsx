import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zuh4mx-6k.css';
import '../../css/h/hthnzab6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="zuh4mx-6k"/><path class="hthnzab6b"/></g>`,
		"fallback": "hugeicons:call-ringing-03",
	});
}

export default Component;
