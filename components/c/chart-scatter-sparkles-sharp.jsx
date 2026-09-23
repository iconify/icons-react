import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rajczabro.css';
import '../../css/o/ok6q0tjkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rajczabro"/><path class="ok6q0tjkm"/></g>`,
		"fallback": "keyline-icons:chart-scatter-sparkles-sharp",
	});
}

export default Component;
