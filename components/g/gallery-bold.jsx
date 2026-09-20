import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxfpo_vyh.css';
import '../../css/k/koc_t55zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rxfpo_vyh"/><path clip-rule="evenodd" class="koc_t55zy"/></g>`,
		"fallback": "solar:gallery-bold",
	});
}

export default Component;
