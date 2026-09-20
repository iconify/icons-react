import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cev2_hbmk.css';
import '../../css/i/iotdvhbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cev2_hbmk"/><path class="iotdvhbxm"/></g>`,
		"fallback": "mage:arrow-up",
	});
}

export default Component;
