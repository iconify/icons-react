import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jo0-y_b7k.css';
import '../../css/c/c0-brbcoc.css';
import '../../css/o/onkgl0h2g.css';
import '../../css/f/frmgf1bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jo0-y_b7k"/><path clip-rule="evenodd" class="c0-brbcoc"/><path class="onkgl0h2g"/><path class="frmgf1bxy"/></g>`,
		"fallback": "andrsrxn:build",
	});
}

export default Component;
