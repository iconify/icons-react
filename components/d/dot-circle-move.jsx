import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/z/zmet8xb1k.css';
import '../../css/w/wng9gxbpa.css';
import '../../css/p/pkd3m9u6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="zmet8xb1k"/><path class="wng9gxbpa"/><path class="pkd3m9u6o"/></g>`,
		"fallback": "andrsrxn:dot-circle-move",
	});
}

export default Component;
