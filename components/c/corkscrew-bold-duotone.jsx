import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7qr63brb.css';
import '../../css/h/h7w9m3boq.css';
import '../../css/u/uwm6s4btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t7qr63brb"/><path class="h7w9m3boq"/><path class="uwm6s4btm"/></g>`,
		"fallback": "solar:corkscrew-bold-duotone",
	});
}

export default Component;
