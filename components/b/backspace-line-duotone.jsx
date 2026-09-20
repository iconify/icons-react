import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evkokvbys.css';
import '../../css/m/mxm2p1bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="evkokvbys"/><path class="mxm2p1bro"/></g>`,
		"fallback": "solar:backspace-line-duotone",
	});
}

export default Component;
