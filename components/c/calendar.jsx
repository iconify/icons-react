import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prerz-7qh.css';
import '../../css/h/h478fybsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prerz-7qh"/><path class="h478fybsl"/></g>`,
		"fallback": "majesticons:calendar",
	});
}

export default Component;
