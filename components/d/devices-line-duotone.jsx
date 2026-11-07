import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qwzcgabfh.css';
import '../../css/q/q-f7avbgh.css';
import '../../css/i/ij-ylgbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qwzcgabfh"/><path class="q-f7avbgh"/><path class="ij-ylgbkn"/></g>`,
		"fallback": "solar:devices-line-duotone",
	});
}

export default Component;
