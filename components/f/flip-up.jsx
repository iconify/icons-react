import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eurlw1b-v.css';
import '../../css/i/ijfs41nje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eurlw1b-v"/><path class="ijfs41nje"/></g>`,
		"fallback": "streamline-freehand-color:flip-up",
	});
}

export default Component;
