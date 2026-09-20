import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynz8pq65i.css';
import '../../css/t/tv_6jisct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ynz8pq65i"/><path class="tv_6jisct"/></g>`,
		"fallback": "solar:cloud-bolt-minimalistic-linear",
	});
}

export default Component;
