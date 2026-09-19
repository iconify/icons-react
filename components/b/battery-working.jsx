import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyj3i9bag.css';
import '../../css/a/as_el_bcn.css';
import '../../css/w/w7_6q7bvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zyj3i9bag"/><path class="as_el_bcn"/><path class="w7_6q7bvf"/></g>`,
		"fallback": "icon-park-outline:battery-working",
	});
}

export default Component;
