import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t12ockcdv.css';
import '../../css/t/tvub1acmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t12ockcdv"/><path class="tvub1acmv"/></g>`,
		"fallback": "coolicons:bluesky-bulk-round",
	});
}

export default Component;
