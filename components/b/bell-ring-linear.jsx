import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zxfji9bbi.css';
import '../../css/v/vjjx3rblu.css';
import '../../css/d/dv5-5hz_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zxfji9bbi"/><path class="vjjx3rblu"/><path class="dv5-5hz_c"/></g>`,
		"fallback": "solar:bell-ring-linear",
	});
}

export default Component;
