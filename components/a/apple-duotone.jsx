import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fu904h20m.css';
import '../../css/j/jbm2lbb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fu904h20m"/><path class="jbm2lbb8m"/></g>`,
		"fallback": "si:apple-duotone",
	});
}

export default Component;
