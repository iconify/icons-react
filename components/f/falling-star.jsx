import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sta0jixcm.css';
import '../../css/k/kiubpebdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sta0jixcm"/><path class="kiubpebdq"/></g>`,
		"fallback": "hugeicons:falling-star",
	});
}

export default Component;
