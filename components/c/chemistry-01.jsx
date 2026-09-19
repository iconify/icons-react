import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/al2qbgb5c.css';
import '../../css/f/fekc2ib-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="al2qbgb5c"/><path class="fekc2ib-o"/></g>`,
		"fallback": "hugeicons:chemistry-01",
	});
}

export default Component;
