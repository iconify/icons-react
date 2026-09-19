import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ozb3qpbzv.css';
import '../../css/o/og5-trnfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ozb3qpbzv"/><path class="og5-trnfz"/></g>`,
		"fallback": "hugeicons:house-plug",
	});
}

export default Component;
