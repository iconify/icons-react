import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/imsmkcc2k.css';
import '../../css/a/akdq19r-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="imsmkcc2k"/><path class="akdq19r-r"/></g>`,
		"fallback": "hugeicons:avocado",
	});
}

export default Component;
