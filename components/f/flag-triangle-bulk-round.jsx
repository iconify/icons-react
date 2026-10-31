import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/un8cxoenf.css';
import '../../css/k/kqrliobak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="un8cxoenf"/><path class="kqrliobak"/></g>`,
		"fallback": "coolicons:flag-triangle-bulk-round",
	});
}

export default Component;
