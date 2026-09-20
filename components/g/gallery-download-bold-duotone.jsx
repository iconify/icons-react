import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/of78i7b3p.css';
import '../../css/n/n6mlowbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="of78i7b3p"/><path clip-rule="evenodd" class="n6mlowbjk"/></g>`,
		"fallback": "solar:gallery-download-bold-duotone",
	});
}

export default Component;
