import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw_lucb3r.css';
import '../../css/g/gohwv_h5t.css';
import '../../css/e/ed8w_yb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xw_lucb3r"/><path class="gohwv_h5t"/><path class="ed8w_yb8v"/></g>`,
		"fallback": "andrsrxn:bell-off",
	});
}

export default Component;
