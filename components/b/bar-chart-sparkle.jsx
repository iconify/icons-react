import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-vngq4zv.css';
import '../../css/n/n7g1coahu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w-vngq4zv"/><path class="n7g1coahu"/></g>`,
		"fallback": "proicons:bar-chart-sparkle",
	});
}

export default Component;
