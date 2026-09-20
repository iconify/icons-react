import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewgdx8b_i.css';
import '../../css/r/rj1nnhb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ewgdx8b_i"/><path class="rj1nnhb8j"/></g>`,
		"fallback": "streamline-freehand-color:design-process-drawing-board",
	});
}

export default Component;
