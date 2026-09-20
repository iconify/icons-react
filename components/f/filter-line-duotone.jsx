import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yumatko_o.css';
import '../../css/b/b-ycikudi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yumatko_o"/><path class="b-ycikudi"/></g>`,
		"fallback": "solar:filter-line-duotone",
	});
}

export default Component;
