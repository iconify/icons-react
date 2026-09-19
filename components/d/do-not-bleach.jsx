import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxn-_t_qi.css';
import '../../css/p/p89c5mbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gxn-_t_qi"/><path class="p89c5mbcr"/></g>`,
		"fallback": "ginetex:do-not-bleach",
	});
}

export default Component;
