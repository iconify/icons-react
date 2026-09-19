import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ir16ucxgr.css';
import '../../css/a/ad0mz576t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ir16ucxgr"/><path class="ad0mz576t"/></g>`,
		"fallback": "hugeicons:honey-01",
	});
}

export default Component;
