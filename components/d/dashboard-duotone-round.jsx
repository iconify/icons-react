import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xio5_bcvg.css';
import '../../css/i/ixg0s9b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xio5_bcvg"/><path class="ixg0s9b1j"/></g>`,
		"fallback": "coolicons:dashboard-duotone-round",
	});
}

export default Component;
