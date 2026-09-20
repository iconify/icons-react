import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kzy9852gd.css';
import '../../css/p/pwbssabuq.css';
import '../../css/k/kg_k8zbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kzy9852gd"/><path class="pwbssabuq"/><path class="kg_k8zbim"/></g>`,
		"fallback": "solar:bottle-linear",
	});
}

export default Component;
