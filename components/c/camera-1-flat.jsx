import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1uvcobhp.css';
import '../../css/l/l-7y2y4qc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m1uvcobhp"/><path class="l-7y2y4qc"/></g>`,
		"fallback": "streamline-flex-color:camera-1-flat",
	});
}

export default Component;
