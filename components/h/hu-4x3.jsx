import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k9eh0i04s.css';
import '../../css/v/v18c9fbau.css';
import '../../css/o/ozz7l8b5l.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k9eh0i04s"/><path class="v18c9fbau"/><path class="ozz7l8b5l"/></g>`,
		"fallback": "flag:hu-4x3",
	});
}

export default Component;
