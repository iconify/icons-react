import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p27vvkydj.css';
import '../../css/s/sdm1hob6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p27vvkydj"/><path clip-rule="evenodd" class="sdm1hob6k"/></g>`,
		"fallback": "reicon:cart-x2-filled",
	});
}

export default Component;
