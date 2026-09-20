import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxqvozjav.css';
import '../../css/o/oztesmb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxqvozjav"/><path class="oztesmb3c"/></g>`,
		"fallback": "reicon:award-certificate-filled",
	});
}

export default Component;
