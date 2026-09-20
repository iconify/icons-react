import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nf_26ccon.css';
import '../../css/f/fb_t30skq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nf_26ccon"/><path class="fb_t30skq"/></g>`,
		"fallback": "lucide:globe-check",
	});
}

export default Component;
