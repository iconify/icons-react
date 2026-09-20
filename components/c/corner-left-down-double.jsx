import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pil0h8bir.css';
import '../../css/d/dmq2wlr_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pil0h8bir"/><path class="dmq2wlr_x"/></g>`,
		"fallback": "tabler:corner-left-down-double",
	});
}

export default Component;
