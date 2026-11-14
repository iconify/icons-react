import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/ao6h7dxtx.css';
import '../../css/o/o_csmu0xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ao6h7dxtx"/><path class="o_csmu0xf"/></g>`,
		"fallback": "hugeicons:bubble-chat-unlock",
	});
}

export default Component;
