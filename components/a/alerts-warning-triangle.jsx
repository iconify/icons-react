import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znmytxbdi.css';
import '../../css/u/ujq_q2ilu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znmytxbdi"/><path class="ujq_q2ilu"/></g>`,
		"fallback": "streamline-freehand-color:alerts-warning-triangle",
	});
}

export default Component;
