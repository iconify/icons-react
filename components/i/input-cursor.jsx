import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yru4c2b4h.css';
import '../../css/m/mu7nm-2hu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yru4c2b4h"/><path class="mu7nm-2hu"/></g>`,
		"fallback": "bi:input-cursor",
	});
}

export default Component;
