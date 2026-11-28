import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqhkotb4u.css';
import '../../css/m/mg9m7rbyr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lqhkotb4u"/><path class="mg9m7rbyr"/></g>`,
		"fallback": "pullo:bring-forward-duotone",
	});
}

export default Component;
