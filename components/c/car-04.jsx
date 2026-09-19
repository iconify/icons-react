import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ewl44ydcb.css';
import '../../css/j/j6pyn-c5m.css';
import '../../css/n/nv0-gzyhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ewl44ydcb"/><path class="j6pyn-c5m"/><path class="nv0-gzyhy"/></g>`,
		"fallback": "hugeicons:car-04",
	});
}

export default Component;
