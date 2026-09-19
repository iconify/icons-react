import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qd7gv945m.css';
import '../../css/n/njc1v-btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qd7gv945m"/><path class="njc1v-btr"/></g>`,
		"fallback": "hugeicons:checkmark-circle-04",
	});
}

export default Component;
