import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ick03brvy.css';
import '../../css/p/ptanuubcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ick03brvy"/><path class="ptanuubcj"/></g>`,
		"fallback": "lets-icons:arrow-down-long-light",
	});
}

export default Component;
