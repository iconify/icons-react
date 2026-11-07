import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dul4rwbfz.css';
import '../../css/m/ml0cb1b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dul4rwbfz"/><path class="ml0cb1b5h"/></g>`,
		"fallback": "solar:columns-2-broken",
	});
}

export default Component;
