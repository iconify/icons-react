import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iq4bu23xe.css';
import '../../css/v/v2cghdcxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iq4bu23xe"/><path class="v2cghdcxj"/></g>`,
		"fallback": "mage:dashboard-minus",
	});
}

export default Component;
