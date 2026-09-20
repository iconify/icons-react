import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ndaztn_1x.css';
import '../../css/d/dlxucibnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ndaztn_1x"/><path class="dlxucibnn"/></g>`,
		"fallback": "mage:chip",
	});
}

export default Component;
