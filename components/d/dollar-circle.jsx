import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w5lai7qfi.css';
import '../../css/f/f94ukvjsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w5lai7qfi"/><circle class="f94ukvjsa"/></g>`,
		"fallback": "proicons:dollar-circle",
	});
}

export default Component;
