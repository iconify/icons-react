import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/i/ix2yyfqqg.css';
import '../../css/n/nv6qhg7zp.css';
import '../../css/s/sxx_hdb0w.css';
import '../../css/h/hbj0uabzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="ix2yyfqqg"/><path class="nv6qhg7zp"/><path class="sxx_hdb0w"/><path class="hbj0uabzk"/></g>`,
		"fallback": "solar:bedside-table-3-line-duotone",
	});
}

export default Component;
