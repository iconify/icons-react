import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ce8bd69bw.css';
import '../../css/q/q8zbp4jyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ce8bd69bw"/><path class="q8zbp4jyt"/></g>`,
		"fallback": "mage:arrow-right",
	});
}

export default Component;
