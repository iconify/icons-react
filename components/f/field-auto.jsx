import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwt341hlt.css';
import '../../css/y/yrvp4ab5k.css';
import '../../css/u/upq6qbcls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwt341hlt"/><path class="yrvp4ab5k"/><path class="upq6qbcls"/></g>`,
		"fallback": "andrsrxn:field-auto",
	});
}

export default Component;
