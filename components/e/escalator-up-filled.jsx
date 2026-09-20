import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6wrotqxc.css';
import '../../css/n/n_0bxbb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6wrotqxc"/><path class="n_0bxbb_l"/></g>`,
		"fallback": "tabler:escalator-up-filled",
	});
}

export default Component;
