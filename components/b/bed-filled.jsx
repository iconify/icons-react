import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/igedhcvsg.css';
import '../../css/u/us3-4cc7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="igedhcvsg"/><path class="us3-4cc7r"/></g>`,
		"fallback": "tabler:bed-filled",
	});
}

export default Component;
