import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1e_8pgph.css';
import '../../css/w/w_toh_bhy.css';
import '../../css/e/emkbitb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b1e_8pgph"/><path class="w_toh_bhy"/><path class="emkbitb5x"/></g>`,
		"fallback": "andrsrxn:automation",
	});
}

export default Component;
