import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yxjgk724m.css';
import '../../css/v/vag-oyb5x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yxjgk724m"/><path class="vag-oyb5x"/></g>`,
		"fallback": "bi:camera-fill",
	});
}

export default Component;
