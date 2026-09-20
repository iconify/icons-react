import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txmeiryss.css';
import '../../css/l/lt7yigbti.css';
import '../../css/p/pcnobwb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txmeiryss"/><path class="lt7yigbti"/><path class="pcnobwb_h"/></g>`,
		"fallback": "solar:battery-charge-bold-duotone",
	});
}

export default Component;
