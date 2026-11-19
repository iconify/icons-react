import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/y/ydjf6mb4t.css';
import '../../css/w/wng9gxbpa.css';
import '../../css/g/gxzt8pb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="ydjf6mb4t"/><path class="wng9gxbpa"/><path class="gxzt8pb7o"/></g>`,
		"fallback": "andrsrxn:dot-circle-plus",
	});
}

export default Component;
