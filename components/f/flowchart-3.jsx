import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_cshy6xr.css';
import '../../css/x/x-7u2igga.css';
import '../../css/g/g4c9tkgrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_cshy6xr"/><path class="x-7u2igga"/><path class="g4c9tkgrz"/></g>`,
		"fallback": "streamline-cyber-color:flowchart-3",
	});
}

export default Component;
