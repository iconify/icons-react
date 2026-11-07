import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l9il5701h.css';
import '../../css/r/r9s0-kbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l9il5701h"/><path class="r9s0-kbwx"/></g>`,
		"fallback": "solar:cloud-line-duotone",
	});
}

export default Component;
