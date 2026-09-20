import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdfarhy4e.css';
import '../../css/d/djr3qgb2d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tdfarhy4e"/><path class="djr3qgb2d"/></g>`,
		"fallback": "rivet-icons:device-solid",
	});
}

export default Component;
