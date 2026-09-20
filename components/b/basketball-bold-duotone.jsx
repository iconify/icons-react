import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ida3dab7o.css';
import '../../css/p/p6yrz0b3y.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/ow95c6k3i.css';
import '../../css/c/cf2_2ceon.css';
import '../../css/s/sw2kbc_hw.css';
import '../../css/d/d2u2ibczd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ida3dab7o"/><path clip-rule="evenodd" class="p6yrz0b3y"/><g class="mc2zb0bvp"><path class="ow95c6k3i"/><path class="cf2_2ceon"/><path class="sw2kbc_hw"/><path class="d2u2ibczd"/></g></g>`,
		"fallback": "solar:basketball-bold-duotone",
	});
}

export default Component;
