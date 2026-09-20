import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dxb0id5cf.css';
import '../../css/p/pzh9jhb6y.css';
import '../../css/a/a6lfmac3o.css';
import '../../css/v/v2s8-khye.css';
import '../../css/v/vn59_jbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dxb0id5cf"/><path class="pzh9jhb6y"/><path class="a6lfmac3o"/><path class="v2s8-khye"/><path class="vn59_jbgk"/></g>`,
		"fallback": "solar:backpack-linear",
	});
}

export default Component;
