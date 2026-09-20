import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uq9mxpybb.css';
import '../../css/t/tb17rxb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uq9mxpybb"/><path class="tb17rxb9w"/></g>`,
		"fallback": "mage:arrow-up-right",
	});
}

export default Component;
