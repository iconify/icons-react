import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/y/y5373sjgh.css';
import '../../css/f/fawqjfb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lx_j5lb4z"/><path class="y5373sjgh"/><path class="fawqjfb5m"/></g>`,
		"fallback": "andrsrxn:clock-time",
	});
}

export default Component;
