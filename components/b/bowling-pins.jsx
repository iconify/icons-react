import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nkmzb6fzi.css';
import '../../css/a/ab_m7d65i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nkmzb6fzi"/><path class="ab_m7d65i"/></g>`,
		"fallback": "hugeicons:bowling-pins",
	});
}

export default Component;
