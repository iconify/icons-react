import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z21eofbtc.css';
import '../../css/k/kx4sv2qyk.css';
import '../../css/m/mw2j0bfon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z21eofbtc"/><path class="kx4sv2qyk"/><path class="mw2j0bfon"/></g>`,
		"fallback": "solar:camera-off-bold-duotone",
	});
}

export default Component;
