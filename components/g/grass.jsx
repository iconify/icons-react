import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mru57abse.css';
import '../../css/s/stzb9mxwy.css';
import '../../css/t/tus2ufbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mru57abse"/><path class="stzb9mxwy"/><path class="tus2ufbhk"/></g>`,
		"fallback": "andrsrxn:grass",
	});
}

export default Component;
