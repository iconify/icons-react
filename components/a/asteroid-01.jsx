import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wh9opwgvq.css';
import '../../css/o/oa9-0xdcp.css';
import '../../css/z/zya3c2i3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wh9opwgvq"/><path class="oa9-0xdcp"/><path class="zya3c2i3b"/></g>`,
		"fallback": "hugeicons:asteroid-01",
	});
}

export default Component;
