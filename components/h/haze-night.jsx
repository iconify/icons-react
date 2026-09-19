import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/puvk43hde.css';
import '../../css/x/xqr865bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="puvk43hde"/><path class="xqr865bgy"/></g>`,
		"fallback": "griddy-icons:haze-night",
	});
}

export default Component;
