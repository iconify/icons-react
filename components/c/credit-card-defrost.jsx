import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vhuc5geil.css';
import '../../css/o/oca4r_byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vhuc5geil"/><path class="oca4r_byu"/></g>`,
		"fallback": "hugeicons:credit-card-defrost",
	});
}

export default Component;
