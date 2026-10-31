import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tzekg83xr.css';
import '../../css/y/yffi_koea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tzekg83xr"/><path class="yffi_koea"/></g>`,
		"fallback": "coolicons:eagle-duotone-round",
	});
}

export default Component;
