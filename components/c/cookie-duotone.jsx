import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oinxnobfn.css';
import '../../css/n/nw29-ac2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oinxnobfn secondary"/><path class="nw29-ac2b primary"/></g>`,
		"fallback": "iconaut:cookie-duotone",
	});
}

export default Component;
