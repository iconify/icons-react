import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nvwd3-b3c.css';
import '../../css/l/lbq8pdu5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nvwd3-b3c"/><path class="lbq8pdu5x"/></g>`,
		"fallback": "hugeicons:amie",
	});
}

export default Component;
