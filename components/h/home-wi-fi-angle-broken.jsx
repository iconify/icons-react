import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pz_5h6bcx.css';
import '../../css/h/h5cnh42vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pz_5h6bcx"/><path class="h5cnh42vo"/></g>`,
		"fallback": "solar:home-wi-fi-angle-broken",
	});
}

export default Component;
