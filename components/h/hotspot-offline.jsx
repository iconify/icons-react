import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w6nnh5bos.css';
import '../../css/y/yks5oxk-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w6nnh5bos"/><path class="yks5oxk-f"/></g>`,
		"fallback": "hugeicons:hotspot-offline",
	});
}

export default Component;
