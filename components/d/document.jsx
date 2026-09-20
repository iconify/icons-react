import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt-mwzbar.css';
import '../../css/m/mxmr4rcnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lt-mwzbar"/><path clip-rule="evenodd" class="mxmr4rcnv"/></g>`,
		"fallback": "nrk:document",
	});
}

export default Component;
