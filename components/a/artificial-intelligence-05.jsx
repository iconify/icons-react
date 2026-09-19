import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/maxwnxb3m.css';
import '../../css/k/k1xrn0fpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="maxwnxb3m"/><path class="k1xrn0fpc"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-05",
	});
}

export default Component;
