import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nsncx-qdn.css';
import '../../css/e/edyq88hwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nsncx-qdn"/><path class="edyq88hwm"/></g>`,
		"fallback": "coolicons:copy-duotone-round",
	});
}

export default Component;
