import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hh9-hdcah.css';
import '../../css/y/y58696-5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hh9-hdcah"/><path clip-rule="evenodd" class="y58696-5r"/></g>`,
		"fallback": "reicon:cart-large4",
	});
}

export default Component;
