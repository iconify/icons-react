import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/r/r-ahhgx6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l80i0rb1m"/><path class="r-ahhgx6h"/></g>`,
		"fallback": "solar:copyright-line-duotone",
	});
}

export default Component;
