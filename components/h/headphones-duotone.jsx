import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y94utxbvw.css';
import '../../css/e/eqmapq8wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary y94utxbvw"/><path class="eqmapq8wo primary"/></g>`,
		"fallback": "iconaut:headphones-duotone",
	});
}

export default Component;
