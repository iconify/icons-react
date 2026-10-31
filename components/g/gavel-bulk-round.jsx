import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecd_ouslz.css';
import '../../css/z/z9bm6466g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ecd_ouslz"/><path class="z9bm6466g"/></g>`,
		"fallback": "coolicons:gavel-bulk-round",
	});
}

export default Component;
