import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrwq9zbjl.css';
import '../../css/p/pz_5h6bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mrwq9zbjl"/><path class="pz_5h6bcx"/></g>`,
		"fallback": "solar:home-smile-angle-broken",
	});
}

export default Component;
