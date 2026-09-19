import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iti8b_hwb.css';
import '../../css/e/e4rjz7l1i.css';
import '../../css/f/fgmsb2bhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iti8b_hwb"/><path class="e4rjz7l1i"/><path class="fgmsb2bhy"/></g>`,
		"fallback": "hugeicons:clipboard-list",
	});
}

export default Component;
