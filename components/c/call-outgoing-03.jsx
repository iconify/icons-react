import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lei3g-6cs.css';
import '../../css/b/b0yug3b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="lei3g-6cs"/><path class="b0yug3b5t"/></g>`,
		"fallback": "hugeicons:call-outgoing-03",
	});
}

export default Component;
