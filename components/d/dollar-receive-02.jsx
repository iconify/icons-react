import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o_x1zk9ws.css';
import '../../css/h/horrxbfuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o_x1zk9ws"/><path class="horrxbfuc"/></g>`,
		"fallback": "hugeicons:dollar-receive-02",
	});
}

export default Component;
