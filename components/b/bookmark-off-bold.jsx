import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4kr7db0h.css';
import '../../css/d/d5f9qib4i.css';
import '../../css/o/oc0vi5bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k4kr7db0h"><path class="d5f9qib4i"/><path class="oc0vi5bvd"/></g>`,
		"fallback": "iconamoon:bookmark-off-bold",
	});
}

export default Component;
