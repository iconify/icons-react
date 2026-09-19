import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1h1nwbtk.css';
import '../../css/f/fi6t_s8wt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="n1h1nwbtk"/><path class="fi6t_s8wt"/></g>`,
		"fallback": "cryptocurrency-color:dock",
	});
}

export default Component;
