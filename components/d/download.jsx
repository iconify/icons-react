import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5v2d7_az.css';
import '../../css/w/wmcjsyboc.css';
import '../../css/c/c01djtbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5v2d7_az"/><path class="wmcjsyboc"/><path class="c01djtbgr"/></g>`,
		"fallback": "andrsrxn:download",
	});
}

export default Component;
