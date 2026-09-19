import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hc1yluhcl.css';
import '../../css/n/na3-2yfwb.css';
import '../../css/n/nwehtcbqh.css';
import '../../css/n/nh-ps30pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hc1yluhcl"/><path class="na3-2yfwb"/><path class="nwehtcbqh"/><path class="nh-ps30pw"/></g>`,
		"fallback": "hugeicons:chart-network",
	});
}

export default Component;
