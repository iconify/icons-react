import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sfrm5m1fc.css';
import '../../css/y/yyu2r_bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sfrm5m1fc"/><path class="yyu2r_bnp"/></g>`,
		"fallback": "hugeicons:folder-details",
	});
}

export default Component;
