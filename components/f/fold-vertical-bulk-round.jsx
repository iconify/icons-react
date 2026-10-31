import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y91ep0b0f.css';
import '../../css/i/ipe5k6bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y91ep0b0f"/><path class="ipe5k6bwf"/></g>`,
		"fallback": "coolicons:fold-vertical-bulk-round",
	});
}

export default Component;
