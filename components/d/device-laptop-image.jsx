import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuc8o_5mk.css';
import '../../css/i/ix4zi_etp.css';
import '../../css/d/dj0jz1r4t.css';
import '../../css/k/kpgpbybfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yuc8o_5mk"/><path class="ix4zi_etp"/><path class="dj0jz1r4t"/><path class="kpgpbybfg"/></g>`,
		"fallback": "andrsrxn:device-laptop-image",
	});
}

export default Component;
