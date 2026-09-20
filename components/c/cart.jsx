import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u345ble3e.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5qf56fne.css';
import '../../css/s/sofibr7-l.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="u345ble3e"/><g transform="translate(2 4)" class="cuyn6tgcc"><circle class="s5qf56fne"/><circle class="sofibr7-l"/></g></g>`,
		"fallback": "system-uicons:cart",
	});
}

export default Component;
