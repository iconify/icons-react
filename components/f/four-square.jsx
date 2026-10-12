import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dz5hr8fgm.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/w/w71_6zn9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.31 21.58)" class="dz5hr8fgm"/><rect transform="matrix(0 -1 -1 0 21.31 21.58)" class="fpuyb9bst"/><path class="w71_6zn9c"/></g>`,
		"fallback": "andrsrxn:four-square",
	});
}

export default Component;
