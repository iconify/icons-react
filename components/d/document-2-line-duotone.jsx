import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/boxufibmx.css';
import '../../css/o/o1_eg2b-k.css';
import '../../css/q/qaiwobb2g.css';
import '../../css/d/dxplmnb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="boxufibmx"/><path class="o1_eg2b-k"/><path class="qaiwobb2g"/><path class="dxplmnb3y"/></g>`,
		"fallback": "solar:document-2-line-duotone",
	});
}

export default Component;
