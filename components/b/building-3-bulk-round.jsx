import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_8fa3j-i.css';
import '../../css/v/vezkfz-5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_8fa3j-i"/><path class="vezkfz-5f"/></g>`,
		"fallback": "coolicons:building-3-bulk-round",
	});
}

export default Component;
