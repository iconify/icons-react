import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7tyh4b8c.css';
import '../../css/u/u4bc0tbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7tyh4b8c"/><rect transform="matrix(0 -1 -1 0 20.43 18.7)" class="u4bc0tbtu"/></g>`,
		"fallback": "andrsrxn:drop-shadow",
	});
}

export default Component;
