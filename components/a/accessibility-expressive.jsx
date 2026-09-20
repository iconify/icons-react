import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4o-1328i.css';
import '../../css/e/ebftmubmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4o-1328i"/><path clip-rule="evenodd" class="ebftmubmc"/></g>`,
		"fallback": "nrk:accessibility-expressive",
	});
}

export default Component;
