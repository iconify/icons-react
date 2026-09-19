import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o77mqsx1i.css';
import '../../css/o/oii_c7bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o77mqsx1i"/><path class="oii_c7bbe"/></g>`,
		"fallback": "hugeicons:analysis-text-link",
	});
}

export default Component;
