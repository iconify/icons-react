import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dw3gp6vcm.css';
import '../../css/n/na80fjbih.css';
import '../../css/t/tnfby2q5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dw3gp6vcm"/><path class="na80fjbih"/><path class="tnfby2q5d"/></g>`,
		"fallback": "solar:battery-low-minimalistic-linear",
	});
}

export default Component;
