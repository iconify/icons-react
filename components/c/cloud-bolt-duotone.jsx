import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ef6v7qb-e.css';
import '../../css/s/srs0eh1lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ef6v7qb-e"/><path class="srs0eh1lc"/></g>`,
		"fallback": "reicon:cloud-bolt-duotone",
	});
}

export default Component;
