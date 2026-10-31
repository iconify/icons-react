import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bq6oz7adf.css';
import '../../css/o/oym9dfbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bq6oz7adf"/><path class="oym9dfbbg"/></g>`,
		"fallback": "coolicons:house-plus-bulk-round",
	});
}

export default Component;
