import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/uokp1hb7l.css';
import '../../css/o/o8t6onbpn.css';
import '../../css/h/hkms2nksv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="uokp1hb7l"/><path class="o8t6onbpn"/></g><path class="hkms2nksv"/></g>`,
		"fallback": "solar:cash-out-bold-duotone",
	});
}

export default Component;
