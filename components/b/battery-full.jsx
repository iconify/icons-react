import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-30fxgbw.css';
import '../../css/t/tpekyrbnk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r-30fxgbw"/><path class="tpekyrbnk"/></g>`,
		"fallback": "bi:battery-full",
	});
}

export default Component;
