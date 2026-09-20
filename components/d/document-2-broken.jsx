import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dxplmnb3y.css';
import '../../css/x/xn4zvpbmt.css';
import '../../css/p/pyeja5bvq.css';
import '../../css/x/xj93a5bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dxplmnb3y"/><path class="xn4zvpbmt"/><path class="pyeja5bvq"/><path class="xj93a5bgo"/></g>`,
		"fallback": "solar:document-2-broken",
	});
}

export default Component;
