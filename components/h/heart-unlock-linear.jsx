import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/brgx0gbyk.css';
import '../../css/f/fuprorb1g.css';
import '../../css/q/qjcn1b-9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="brgx0gbyk"/><path class="fuprorb1g"/><path class="qjcn1b-9j"/></g>`,
		"fallback": "solar:heart-unlock-linear",
	});
}

export default Component;
