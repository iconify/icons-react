import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccg-u3bwk.css';
import '../../css/n/nnezmmy9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ccg-u3bwk"/><path class="nnezmmy9x"/></g>`,
		"fallback": "solar:forbidden-circle-bold-duotone",
	});
}

export default Component;
