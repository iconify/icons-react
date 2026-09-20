import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g-f2cbf0p.css';
import '../../css/m/mbf-0cbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g-f2cbf0p"/><path class="mbf-0cbcp"/></g>`,
		"fallback": "reicon:cart-down-filled",
	});
}

export default Component;
