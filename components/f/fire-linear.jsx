import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gt39wtbtr.css';
import '../../css/r/rgk5izb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gt39wtbtr"/><path class="rgk5izb5e"/></g>`,
		"fallback": "solar:fire-linear",
	});
}

export default Component;
