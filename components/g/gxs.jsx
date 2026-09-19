import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0u8q4bcr.css';
import '../../css/s/samabcbrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="r0u8q4bcr"/><path class="samabcbrz"/></g>`,
		"fallback": "cryptocurrency-color:gxs",
	});
}

export default Component;
