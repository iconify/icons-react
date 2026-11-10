import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au_z8ub6r.css';
import '../../css/l/lrxb7jbcs.css';
import '../../css/u/uhpd7_0zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="au_z8ub6r"/><path class="lrxb7jbcs"/><path class="uhpd7_0zc"/></g>`,
		"fallback": "andrsrxn:image-search",
	});
}

export default Component;
