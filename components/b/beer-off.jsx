import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfwq0kb9t.css';
import '../../css/d/dxpnt46bu.css';
import '../../css/l/lqxtledjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pfwq0kb9t"/><path class="dxpnt46bu"/><path class="lqxtledjz"/></g>`,
		"fallback": "andrsrxn:beer-off",
	});
}

export default Component;
