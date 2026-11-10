import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x3xd86b1m.css';
import '../../css/x/xz2__gk7f.css';
import '../../css/l/lj6ilvb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x3xd86b1m"/><path class="xz2__gk7f"/><path class="lj6ilvb4m"/></g>`,
		"fallback": "andrsrxn:bug-off",
	});
}

export default Component;
