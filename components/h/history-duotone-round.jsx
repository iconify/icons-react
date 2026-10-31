import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4if0pbic.css';
import '../../css/h/h3ff0kbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4if0pbic"/><path class="h3ff0kbzr"/></g>`,
		"fallback": "coolicons:history-duotone-round",
	});
}

export default Component;
