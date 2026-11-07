import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k8cjshzbe.css';
import '../../css/o/oghfln6am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k8cjshzbe"/><path class="oghfln6am"/></g>`,
		"fallback": "solar:call-cancel-linear",
	});
}

export default Component;
