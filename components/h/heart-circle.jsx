import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_xaf6bju.css';
import '../../css/z/ze92cpb2t.css';
import '../../css/t/t9e-z4bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h_xaf6bju"/><circle class="ze92cpb2t"/><path class="t9e-z4bmz"/></g>`,
		"fallback": "andrsrxn:heart-circle",
	});
}

export default Component;
