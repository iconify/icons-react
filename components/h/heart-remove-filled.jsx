import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wa2su2b1p.css';
import '../../css/i/icp4u99wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wa2su2b1p"/><path class="icp4u99wm"/></g>`,
		"fallback": "reicon:heart-remove-filled",
	});
}

export default Component;
