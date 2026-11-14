import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s2tjblm1s.css';
import '../../css/v/vrxkl4bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s2tjblm1s"/><path class="vrxkl4bye"/></g>`,
		"fallback": "hugeicons:euro-square",
	});
}

export default Component;
