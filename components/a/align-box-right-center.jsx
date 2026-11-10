import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2c32p0ip.css';
import '../../css/j/j_rcysb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f2c32p0ip"/><path class="j_rcysb1a"/></g>`,
		"fallback": "andrsrxn:align-box-right-center",
	});
}

export default Component;
