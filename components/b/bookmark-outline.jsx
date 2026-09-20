import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i02j309jj.css';
import '../../css/r/riumcx5ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i02j309jj"/><path clip-rule="evenodd" class="riumcx5ww"/></g>`,
		"fallback": "solar:bookmark-outline",
	});
}

export default Component;
