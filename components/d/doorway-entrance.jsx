import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sbm3pcbqf.css';
import '../../css/x/x2bvdpb2k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sbm3pcbqf"/><path class="x2bvdpb2k"/></g>`,
		"fallback": "at-icons:doorway-entrance",
	});
}

export default Component;
