import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k212sxbyf.css';
import '../../css/u/uy6iosx5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k212sxbyf"/><path class="uy6iosx5w"/></g>`,
		"fallback": "andrsrxn:dam",
	});
}

export default Component;
