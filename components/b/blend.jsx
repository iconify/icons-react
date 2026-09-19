import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/elti8xbhv.css';
import '../../css/f/fwwvtv5go.css';
import '../../css/e/e-5oirana.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="elti8xbhv"/><path class="fwwvtv5go"/><path class="e-5oirana"/></g>`,
		"fallback": "hugeicons:blend",
	});
}

export default Component;
