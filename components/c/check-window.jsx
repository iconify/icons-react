import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ovkwudbip.css';
import '../../css/e/e4237ebvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ovkwudbip"/><path class="e4237ebvr"/></g>`,
		"fallback": "iconoir:check-window",
	});
}

export default Component;
