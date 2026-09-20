import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zh3at_7ue.css';
import '../../css/r/ro541xb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zh3at_7ue"/><path class="ro541xb1r"/></g>`,
		"fallback": "solar:call-dropped-bold-duotone",
	});
}

export default Component;
