import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_njqbc3z.css';
import '../../css/w/wvlta01vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e_njqbc3z"/><path class="wvlta01vs"/></g>`,
		"fallback": "tabler:golf-filled",
	});
}

export default Component;
