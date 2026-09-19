import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ls81w84wa.css';
import '../../css/q/qk5l60_1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ls81w84wa"/><path class="qk5l60_1o"/></g>`,
		"fallback": "hugeicons:4k",
	});
}

export default Component;
