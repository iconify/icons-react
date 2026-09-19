import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y4pucs45z.css';
import '../../css/b/beby--3pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y4pucs45z"/><path class="beby--3pr"/></g>`,
		"fallback": "hugeicons:blockchain-05",
	});
}

export default Component;
