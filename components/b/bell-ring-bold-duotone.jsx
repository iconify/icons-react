import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-hi-wsol.css';
import '../../css/p/psb9smbpn.css';
import '../../css/p/p1d6cybfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m-hi-wsol"/><path class="psb9smbpn"/><path class="p1d6cybfr"/></g>`,
		"fallback": "solar:bell-ring-bold-duotone",
	});
}

export default Component;
