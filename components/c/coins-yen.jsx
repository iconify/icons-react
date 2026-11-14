import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hd-yk0ryw.css';
import '../../css/i/ij2638f6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hd-yk0ryw"/><path class="ij2638f6g"/></g>`,
		"fallback": "hugeicons:coins-yen",
	});
}

export default Component;
