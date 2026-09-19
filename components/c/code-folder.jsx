import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m7-njpf6p.css';
import '../../css/d/d2zdpu4be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m7-njpf6p"/><path class="d2zdpu4be"/></g>`,
		"fallback": "hugeicons:code-folder",
	});
}

export default Component;
