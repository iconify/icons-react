import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/u/u5455w3_p.css';
import '../../css/w/wng9gxbpa.css';
import '../../css/g/gd3126b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="u5455w3_p"/><path class="wng9gxbpa"/><path class="gd3126b8k"/></g>`,
		"fallback": "andrsrxn:dot-circle-check",
	});
}

export default Component;
