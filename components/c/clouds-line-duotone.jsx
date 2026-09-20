import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w9qnccbpx.css';
import '../../css/t/th4vp6ksk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w9qnccbpx"/><path class="th4vp6ksk"/></g>`,
		"fallback": "solar:clouds-line-duotone",
	});
}

export default Component;
