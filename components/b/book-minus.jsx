import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l59vh_bna.css';
import '../../css/u/u7bkv5ukl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l59vh_bna"/><path class="u7bkv5ukl"/></g>`,
		"fallback": "andrsrxn:book-minus",
	});
}

export default Component;
