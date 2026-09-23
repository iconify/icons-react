import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wz1j55bln.css';
import '../../css/n/nfyt3aclc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wz1j55bln"/><path class="nfyt3aclc"/></g>`,
		"fallback": "keyline-icons:chart-column-sparkles-sharp",
	});
}

export default Component;
