import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dz5hr8fgm.css';
import '../../css/x/x--ff12fu.css';
import '../../css/f/fpuyb9bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.54 21.84)" class="dz5hr8fgm"/><path class="x--ff12fu"/><rect transform="matrix(0 -1 -1 0 21.54 21.84)" class="fpuyb9bst"/></g>`,
		"fallback": "andrsrxn:code-square",
	});
}

export default Component;
