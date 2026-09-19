import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d-0kgw10j.css';
import '../../css/j/jri0z7b3j.css';
import '../../css/x/xkzi28b7v.css';
import '../../css/m/ms-vbebhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d-0kgw10j"/><path class="jri0z7b3j"/><path class="xkzi28b7v"/><path class="ms-vbebhp"/></g>`,
		"fallback": "hugeicons:bitcoin-01",
	});
}

export default Component;
