import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dca3brbul.css';
import '../../css/g/gk350qb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dca3brbul"/><path class="gk350qb1w"/></g>`,
		"fallback": "solar:folders-bold-duotone",
	});
}

export default Component;
