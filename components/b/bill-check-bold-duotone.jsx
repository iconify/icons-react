import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7_-lidbt.css';
import '../../css/m/mffs36bhg.css';
import '../../css/i/i68nbtb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s7_-lidbt"/><path class="mffs36bhg"/><path class="i68nbtb8i"/></g>`,
		"fallback": "solar:bill-check-bold-duotone",
	});
}

export default Component;
