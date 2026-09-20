import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/grn5n2bhg.css';
import '../../css/v/vdstzy06e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="grn5n2bhg"/><path class="vdstzy06e"/></g>`,
		"fallback": "keyline-icons:chart-pie-sharp-two-tone",
	});
}

export default Component;
