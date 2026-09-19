import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mhks76b_b.css';
import '../../css/g/gcvor9ish.css';
import '../../css/k/ke-lvtb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="mhks76b_b"/><path class="gcvor9ish"/><path class="ke-lvtb0w"/></g>`,
		"fallback": "hugeicons:3d-rotate",
	});
}

export default Component;
