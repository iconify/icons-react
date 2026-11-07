import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/km0klhbji.css';
import '../../css/p/pzh9jhb6y.css';
import '../../css/d/dfwvprboi.css';
import '../../css/r/rsrcios1h.css';
import '../../css/v/vn59_jbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="km0klhbji"/><path class="pzh9jhb6y"/><path class="dfwvprboi"/><path class="rsrcios1h"/><path class="vn59_jbgk"/></g>`,
		"fallback": "solar:backpack-broken",
	});
}

export default Component;
