import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2ug01bcr.css';
import '../../css/d/de12s2bkd.css';
import '../../css/j/jjfhnactb.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGBgS7qSkY)" class="cuyn6tgcc"><path class="l2ug01bcr"/><path class="de12s2bkd"/><path class="jjfhnactb"/></g><defs><clipPath id="SVGBgS7qSkY"><path class="w49j0rbvv"/></clipPath></defs></g>`,
		"fallback": "ginetex:hand-wash-at-40c",
	});
}

export default Component;
