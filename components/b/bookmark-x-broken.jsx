import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sd4nisbcm.css';
import '../../css/x/xk82uq_ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sd4nisbcm"/><path class="xk82uq_ke"/></g>`,
		"fallback": "solar:bookmark-x-broken",
	});
}

export default Component;
