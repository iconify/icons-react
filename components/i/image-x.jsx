import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq8h_zb-t.css';
import '../../css/s/sqgeu7_2a.css';
import '../../css/k/k1488cb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nq8h_zb-t"/><path class="sqgeu7_2a"/><path class="k1488cb1l"/></g>`,
		"fallback": "andrsrxn:image-x",
	});
}

export default Component;
