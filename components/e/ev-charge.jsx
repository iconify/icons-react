import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nim1vxs4y.css';
import '../../css/p/p83bgjdkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nim1vxs4y"/><path class="p83bgjdkq"/></g>`,
		"fallback": "iconoir:ev-charge",
	});
}

export default Component;
