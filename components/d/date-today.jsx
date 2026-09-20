import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9odpybon.css';
import '../../css/h/htjepabmz.css';
import '../../css/e/e4ii85bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i9odpybon"/><path class="htjepabmz"/><path class="e4ii85bpa"/></g>`,
		"fallback": "lets-icons:date-today",
	});
}

export default Component;
