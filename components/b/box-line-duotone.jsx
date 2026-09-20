import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d_h808bhb.css';
import '../../css/r/rgo_xe8-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d_h808bhb"/><path class="rgo_xe8-x"/></g>`,
		"fallback": "solar:box-line-duotone",
	});
}

export default Component;
