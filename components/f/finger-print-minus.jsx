import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yeinjdbth.css';
import '../../css/y/y4sknjj0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yeinjdbth"/><path class="y4sknjj0o"/></g>`,
		"fallback": "hugeicons:finger-print-minus",
	});
}

export default Component;
