import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r39zhw3ax.css';
import '../../css/h/h19k08drx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r39zhw3ax"/><path class="h19k08drx"/></g>`,
		"fallback": "hugeicons:flow",
	});
}

export default Component;
