import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b52jpbbmn.css';
import '../../css/q/q8xi7ko3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="b52jpbbmn"/><path class="q8xi7ko3y"/></g>`,
		"fallback": "mingcute:barcode-scan-line",
	});
}

export default Component;
