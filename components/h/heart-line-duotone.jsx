import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrehnvbta.css';
import '../../css/k/k8mgrytpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mrehnvbta"/><path class="k8mgrytpp"/></g>`,
		"fallback": "solar:heart-line-duotone",
	});
}

export default Component;
