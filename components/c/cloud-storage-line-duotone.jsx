import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynz8pq65i.css';
import '../../css/f/f3w64j28w.css';
import '../../css/c/cehgcdc1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ynz8pq65i"/><path class="f3w64j28w"/><path class="cehgcdc1k"/></g>`,
		"fallback": "solar:cloud-storage-line-duotone",
	});
}

export default Component;
