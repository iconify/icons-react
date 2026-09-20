import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynz8pq65i.css';
import '../../css/c/c6ymqnboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ynz8pq65i"/><path class="c6ymqnboh"/></g>`,
		"fallback": "solar:cloud-bolt-linear",
	});
}

export default Component;
