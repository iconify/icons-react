import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vq4varbat.css';
import '../../css/n/nim1vxs4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vq4varbat"/><path class="nim1vxs4y"/></g>`,
		"fallback": "iconoir:ev-charge-alt",
	});
}

export default Component;
