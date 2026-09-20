import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuul9lbyg.css';
import '../../css/f/fikjb1blf.css';
import '../../css/x/x86lldbvo.css';
import '../../css/f/f75zwb5hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuul9lbyg"/><path class="fikjb1blf"/><path class="x86lldbvo"/><path class="f75zwb5hw"/></g>`,
		"fallback": "streamline-cyber-color:heart-calendar",
	});
}

export default Component;
