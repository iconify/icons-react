import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4z9am1vm.css';
import '../../css/w/wsws-sbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4z9am1vm"/><path class="wsws-sbhl"/></g>`,
		"fallback": "coolicons:bee-bulk-round",
	});
}

export default Component;
