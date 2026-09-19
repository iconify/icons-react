import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x26afwbqj.css';
import '../../css/d/dh2-kybrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x26afwbqj"/><path class="dh2-kybrs"/></g>`,
		"fallback": "ginetex:flat-drying",
	});
}

export default Component;
