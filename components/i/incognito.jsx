import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fpwytkp9v.css';
import '../../css/d/d8dsennzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fpwytkp9v"/><path class="d8dsennzr"/></g>`,
		"fallback": "hugeicons:incognito",
	});
}

export default Component;
