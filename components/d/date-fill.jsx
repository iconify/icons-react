import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhgx2krsa.css';
import '../../css/e/e4ii85bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jhgx2krsa"/><path class="e4ii85bpa"/></g>`,
		"fallback": "lets-icons:date-fill",
	});
}

export default Component;
