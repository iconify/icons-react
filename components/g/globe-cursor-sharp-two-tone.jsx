import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/urdyx_lzo.css';
import '../../css/k/k4x9z7b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="urdyx_lzo"/><path class="k4x9z7b3n"/></g>`,
		"fallback": "keyline-icons:globe-cursor-sharp-two-tone",
	});
}

export default Component;
