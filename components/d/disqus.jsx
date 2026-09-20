import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uluktcj_s.css';
import '../../css/c/ch0qgpbmt.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uluktcj_s"/><path class="ch0qgpbmt"/></g>`,
		"fallback": "jam:disqus",
	});
}

export default Component;
