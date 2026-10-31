import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p8eiwgunm.css';
import '../../css/n/nn4h-1bks.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="p8eiwgunm"/><path class="nn4h-1bks"/></g>`,
		"fallback": "cif:gr",
	});
}

export default Component;
