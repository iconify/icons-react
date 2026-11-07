import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rcnks01sd.css';
import '../../css/p/pz_5h6bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rcnks01sd"/><path class="pz_5h6bcx"/></g>`,
		"fallback": "solar:home-angle-2-broken",
	});
}

export default Component;
