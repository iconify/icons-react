import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xsk-bubjk.css';
import '../../css/q/q8ozq6b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xsk-bubjk"/><path class="q8ozq6b_k"/></g>`,
		"fallback": "keyline-icons:folders-sharp-fill",
	});
}

export default Component;
