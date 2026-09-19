import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/neqpe-b8w.css';
import '../../css/y/yeinjdbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="neqpe-b8w"/><path class="yeinjdbth"/></g>`,
		"fallback": "hugeicons:finger-print-remove",
	});
}

export default Component;
