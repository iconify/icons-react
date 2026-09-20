import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wudpi-b1g.css';
import '../../css/l/lpz3vpbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wudpi-b1g"/><path class="lpz3vpbnp"/></g>`,
		"fallback": "solar:check-line-duotone",
	});
}

export default Component;
