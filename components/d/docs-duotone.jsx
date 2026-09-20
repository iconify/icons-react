import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moy38714o.css';
import '../../css/p/p3wn9u10k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="moy38714o"/><path class="p3wn9u10k"/></g>`,
		"fallback": "reicon:docs-duotone",
	});
}

export default Component;
