import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x5kehgbrh.css';
import '../../css/f/fohmthpcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x5kehgbrh"/><path class="fohmthpcy"/></g>`,
		"fallback": "pixelarticons:grid-2x3",
	});
}

export default Component;
