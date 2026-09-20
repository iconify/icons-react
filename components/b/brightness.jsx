import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qy4e2ebar.css';
import '../../css/p/pl52h0b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="qy4e2ebar"/><path class="pl52h0b1q"/></g>`,
		"fallback": "proicons:brightness",
	});
}

export default Component;
