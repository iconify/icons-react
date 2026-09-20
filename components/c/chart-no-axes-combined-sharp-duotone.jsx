import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i65lcpftl.css';
import '../../css/t/tziaf_0sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i65lcpftl"/><path class="tziaf_0sp"/></g>`,
		"fallback": "keyline-icons:chart-no-axes-combined-sharp-duotone",
	});
}

export default Component;
