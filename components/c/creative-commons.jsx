import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uny6rsjdx.css';
import '../../css/f/fi8-0bc-r.css';
import '../../css/h/h_1w3bl5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uny6rsjdx"/><path class="fi8-0bc-r"/><path class="h_1w3bl5n"/></g>`,
		"fallback": "andrsrxn:creative-commons",
	});
}

export default Component;
