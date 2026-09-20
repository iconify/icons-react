import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qkjdwlb6f.css';
import '../../css/b/bip41cxww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qkjdwlb6f"/><path class="bip41cxww"/></g>`,
		"fallback": "keyline-icons:bell-x-sharp-fill",
	});
}

export default Component;
