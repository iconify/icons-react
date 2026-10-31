import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfrz65b6b.css';
import '../../css/v/vcau_mbwa.css';
import '../../css/r/r-xllwvgf.css';
import '../../css/p/p4rsm8b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfrz65b6b wm-k"/><path class="vcau_mbwa wm-a"/><path class="r-xllwvgf wm-s"/><circle class="p4rsm8b3e"/></g>`,
		"fallback": "withicons:avatar-unicorn-gloss",
	});
}

export default Component;
