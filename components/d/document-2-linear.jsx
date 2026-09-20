import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/boxufibmx.css';
import '../../css/x/xn4zvpbmt.css';
import '../../css/p/pyeja5bvq.css';
import '../../css/d/dxplmnb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="boxufibmx"/><path class="xn4zvpbmt"/><path class="pyeja5bvq"/><path class="dxplmnb3y"/></g>`,
		"fallback": "solar:document-2-linear",
	});
}

export default Component;
