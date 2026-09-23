import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/enxjzbbbm.css';
import '../../css/y/yhx9o1s9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="enxjzbbbm"/><path class="yhx9o1s9p"/></g>`,
		"fallback": "keyline-icons:chart-line-increasing-sparkles",
	});
}

export default Component;
