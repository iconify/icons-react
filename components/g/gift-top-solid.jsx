import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x195ytb9s.css';
import '../../css/p/pztkbryao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x195ytb9s"/><path class="pztkbryao"/></g>`,
		"fallback": "heroicons:gift-top-solid",
	});
}

export default Component;
