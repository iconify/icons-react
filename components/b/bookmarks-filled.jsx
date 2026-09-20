import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-3x22bpv.css';
import '../../css/o/on-5asnsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-3x22bpv"/><path class="on-5asnsy"/></g>`,
		"fallback": "tabler:bookmarks-filled",
	});
}

export default Component;
