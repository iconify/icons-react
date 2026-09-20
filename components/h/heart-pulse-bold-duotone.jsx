import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rp_-t8bbr.css';
import '../../css/p/pzi6j2bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rp_-t8bbr"/><path class="pzi6j2bzc"/></g>`,
		"fallback": "solar:heart-pulse-bold-duotone",
	});
}

export default Component;
