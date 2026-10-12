import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xaop2k6ag.css';
import '../../css/r/r8meyg65b.css';
import '../../css/p/pi5-lxblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xaop2k6ag"/><path class="r8meyg65b"/><path class="pi5-lxblj"/></g>`,
		"fallback": "andrsrxn:fuel",
	});
}

export default Component;
