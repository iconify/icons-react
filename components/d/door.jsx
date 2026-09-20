import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq1qd3b9n.css';
import '../../css/j/ju8j3kb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nq1qd3b9n"/><circle class="ju8j3kb9j"/></g>`,
		"fallback": "proicons:door",
	});
}

export default Component;
