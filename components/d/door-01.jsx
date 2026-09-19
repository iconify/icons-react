import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g7pul-b5l.css';
import '../../css/d/d7d9q2b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g7pul-b5l"/><path class="d7d9q2b6h"/></g>`,
		"fallback": "hugeicons:door-01",
	});
}

export default Component;
