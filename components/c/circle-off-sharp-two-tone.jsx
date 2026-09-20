import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t2h5f5bzc.css';
import '../../css/s/sak9_hyxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t2h5f5bzc"/><path class="sak9_hyxl"/></g>`,
		"fallback": "keyline-icons:circle-off-sharp-two-tone",
	});
}

export default Component;
