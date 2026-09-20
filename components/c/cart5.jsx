import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kyf5r_oaq.css';
import '../../css/l/lwv03706h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kyf5r_oaq"/><path clip-rule="evenodd" class="lwv03706h"/></g>`,
		"fallback": "reicon:cart5",
	});
}

export default Component;
