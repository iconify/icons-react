import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/ki-is0djc.css';
import '../../css/v/vfu4_2uej.css';
import '../../css/k/kp8s8yb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ki-is0djc"/><path class="vfu4_2uej"/><path class="kp8s8yb8m"/></g>`,
		"fallback": "streamline-sharp-color:cutter",
	});
}

export default Component;
