import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i430hfhsf.css';
import '../../css/e/ejt8x3b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i430hfhsf"/><path class="ejt8x3b7b"/></g>`,
		"fallback": "coolicons:book-open-duotone-round",
	});
}

export default Component;
