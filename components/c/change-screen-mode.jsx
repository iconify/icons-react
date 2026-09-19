import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d_16acc-r.css';
import '../../css/x/x1myfjbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d_16acc-r"/><path class="x1myfjbky"/></g>`,
		"fallback": "hugeicons:change-screen-mode",
	});
}

export default Component;
