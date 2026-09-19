import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uymc0v5pg.css';
import '../../css/w/wf0aribmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uymc0v5pg"/><path class="wf0aribmi"/></g>`,
		"fallback": "hugeicons:identification",
	});
}

export default Component;
