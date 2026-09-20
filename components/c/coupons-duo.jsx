import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov163mcoa.css';
import '../../css/v/v_zv3we7l.css';
import '../../css/u/uueb5sb7v.css';
import '../../css/d/dg7onhbap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ov163mcoa"/><path class="v_zv3we7l"/><path class="uueb5sb7v"/><path class="dg7onhbap"/></g>`,
		"fallback": "streamline-kameleon-color:coupons-duo",
	});
}

export default Component;
