import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etjvouk8o.css';
import '../../css/c/cuihl8bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etjvouk8o secondary"/><path class="cuihl8bni primary"/></g>`,
		"fallback": "iconaut:flow-sort-duotone",
	});
}

export default Component;
