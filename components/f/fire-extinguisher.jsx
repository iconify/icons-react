import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f68gzib_a.css';
import '../../css/w/w5y7u-nif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f68gzib_a"/><path class="w5y7u-nif"/></g>`,
		"fallback": "hugeicons:fire-extinguisher",
	});
}

export default Component;
