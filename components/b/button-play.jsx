import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_q6t0bke.css';
import '../../css/t/th6zelb8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_q6t0bke"/><path class="th6zelb8m"/></g>`,
		"fallback": "streamline-color:button-play",
	});
}

export default Component;
