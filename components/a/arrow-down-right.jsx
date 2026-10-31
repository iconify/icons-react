import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xh78t3cbv.css';
import '../../css/n/ne28do8fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xh78t3cbv"/><path class="ne28do8fr"/></g>`,
		"fallback": "withicons-retro:arrow-down-right",
	});
}

export default Component;
