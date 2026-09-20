import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dw3gp6vcm.css';
import '../../css/n/na80fjbih.css';
import '../../css/b/by8lpqc5r.css';
import '../../css/k/k_8y6cbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dw3gp6vcm"/><path class="na80fjbih"/><path class="by8lpqc5r"/><path class="k_8y6cbed"/></g>`,
		"fallback": "solar:battery-half-linear",
	});
}

export default Component;
